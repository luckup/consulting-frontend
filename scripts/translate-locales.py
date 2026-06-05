#!/usr/bin/env python3
"""Translate i18n TS message files from English to es / pt / ja."""
from __future__ import annotations

import re
import sys
import time
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parent.parent
MESSAGES = ROOT / "src" / "i18n" / "messages"
CONTENT = MESSAGES / "content"

LOCALE_TARGETS = {"es": "es", "pt": "pt", "ja": "ja"}

PRESERVE = {
    "MoonSofts",
    "Moonsofts",
    "MVP",
    "API",
    "APIs",
    "SEO",
    "SaaS",
    "AI",
    "Copilot",
    "GitHub",
    "Medium",
    "EMEA",
    "APAC",
    "Türkiye",
    "U.S.",
}

SKIP_PATTERNS = [
    re.compile(r"^https?://"),
    re.compile(r"^@/"),
    re.compile(r"\.ts$"),
    re.compile(r"^[\w-]+@[\w.-]+$"),
]

CACHE: dict[tuple[str, str], str] = {}


def should_skip(text: str) -> bool:
    stripped = text.strip()
    if not stripped:
        return True
    if stripped in PRESERVE:
        return True
    for pat in SKIP_PATTERNS:
        if pat.search(stripped):
            return True
    return False


def protect_terms(text: str) -> tuple[str, dict[str, str]]:
    tokens: dict[str, str] = {}
    out = text
    for i, term in enumerate(sorted(PRESERVE, key=len, reverse=True)):
        if term in out:
            token = f"__KEEP{i}__"
            tokens[token] = term
            out = out.replace(term, token)
    return out, tokens


def restore_terms(text: str, tokens: dict[str, str]) -> str:
    out = text
    for token, term in tokens.items():
        out = out.replace(token, term)
    return out


def translate_text(text: str, target: str) -> str:
    key = (target, text)
    if key in CACHE:
        return CACHE[key]
    if should_skip(text):
        CACHE[key] = text
        return text

    protected, tokens = protect_terms(text)
    last_error: Exception | None = None
    for attempt in range(5):
        try:
            result = GoogleTranslator(source="en", target=target).translate(protected)
            if result:
                result = restore_terms(result, tokens)
                CACHE[key] = result
                time.sleep(0.08)
                return result
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            time.sleep(0.5 * (attempt + 1))

    print(f"  warn: giving up ({last_error!r}): {text[:70]}...", file=sys.stderr)
    return text


def escape_ts_string(text: str, quote: str) -> str:
    if quote == "'":
        return text.replace("\\", "\\\\").replace("'", "\\'")
    return text.replace("\\", "\\\\").replace('"', '\\"')


def read_string(source: str, start: int) -> tuple[str, int, str]:
    quote = source[start]
    pos = start + 1
    n = len(source)
    chars: list[str] = []
    while pos < n:
        ch = source[pos]
        if ch == "\\" and pos + 1 < n:
            chars.append(source[pos : pos + 2])
            pos += 2
            continue
        if ch == quote:
            return "".join(chars), pos + 1, quote
        chars.append(ch)
        pos += 1
    return "".join(chars), pos, quote


def extract_and_replace_strings(source: str, target: str) -> str:
    result: list[str] = []
    i = 0
    n = len(source)

    while i < n:
        ch = source[i]
        if ch in ("'", '"'):
            raw, end, quote = read_string(source, i)
            after = source[end : end + 30]
            is_key = re.match(r"\s*:", after) is not None
            if is_key:
                result.append(source[i:end])
                i = end
                continue

            line_start = source.rfind("\n", 0, i) + 1
            line_prefix = source[line_start:i].strip()
            if line_prefix.startswith("import ") or line_prefix.startswith("from "):
                result.append(source[i:end])
                i = end
                continue

            translated = translate_text(raw, target)
            result.append(quote + escape_ts_string(translated, quote) + quote)
            i = end
            continue

        result.append(ch)
        i += 1

    return "".join(result)


def localize_source(source: str, locale: str) -> str:
    pairs = [
        ("enMessages", f"{locale}Messages"),
        ("enContent", f"{locale}Content"),
        ("enUi", f"{locale}Ui"),
        ("enSidebar", f"{locale}Sidebar"),
        ("enHomeSections", f"{locale}HomeSections"),
        ("enHomeFaq", f"{locale}HomeFaq"),
        ("enIndustries", f"{locale}Industries"),
        ("enNewsHeadlines", f"{locale}NewsHeadlines"),
        ("enNewsArticles", f"{locale}NewsArticles"),
        ("enNews", f"{locale}News"),
        ("enPages", f"{locale}Pages"),
    ]
    out = source
    for en_name, loc_name in pairs:
        out = out.replace(en_name, loc_name)
    return out


CONTENT_FILES = ["Ui", "Sidebar", "HomeSections", "HomeFaq", "Industries", "News", "Pages"]


def translate_locale(locale: str) -> None:
    target = LOCALE_TARGETS[locale]
    print(f"\n=== {locale} ({target}) ===", flush=True)

    en_content = (CONTENT / "enContent.ts").read_text(encoding="utf-8")
    localized_content = localize_source(en_content, locale)
    localized_content = localized_content.replace("export const enContent", f"export const {locale}Content")
    (CONTENT / f"{locale}Content.ts").write_text(localized_content, encoding="utf-8")
    print(f"  {locale}Content.ts (imports only)", flush=True)

    for suffix in CONTENT_FILES:
        en_path = CONTENT / f"en{suffix}.ts"
        out_path = CONTENT / f"{locale}{suffix}.ts"
        source = en_path.read_text(encoding="utf-8")
        export_from = f"en{suffix}" if suffix != "News" else "enNews"
        export_to = f"{locale}{suffix}" if suffix != "News" else f"{locale}News"
        source = localize_source(source, locale)
        print(f"  {out_path.name}...", flush=True)
        out_path.write_text(extract_and_replace_strings(source, target), encoding="utf-8")
        print(f"  done {out_path.name}", flush=True)

    en_main = (MESSAGES / "en.ts").read_text(encoding="utf-8")
    main = localize_source(en_main, locale)
    main = main.replace("export const enMessages", f"export const {locale}Messages")
    print(f"  {locale}.ts...", flush=True)
    (MESSAGES / f"{locale}.ts").write_text(extract_and_replace_strings(main, target), encoding="utf-8")
    print(f"  done {locale}.ts", flush=True)


def main() -> None:
    locales = sys.argv[1:] if len(sys.argv) > 1 else list(LOCALE_TARGETS.keys())
    for locale in locales:
        if locale not in LOCALE_TARGETS:
            print(f"Unknown locale: {locale}", file=sys.stderr)
            continue
        translate_locale(locale)


if __name__ == "__main__":
    main()
