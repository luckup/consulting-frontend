#!/usr/bin/env python3
import re
from pathlib import Path

CONTENT = Path(__file__).resolve().parent.parent / "src" / "i18n" / "messages" / "content"
MESSAGES = Path(__file__).resolve().parent.parent / "src" / "i18n" / "messages"


def extract_strings(text):
    strings = []
    i = 0
    while i < len(text):
        if text[i] in "'\"":
            q = text[i]
            i += 1
            buf = []
            while i < len(text):
                if text[i] == "\\" and i + 1 < len(text):
                    buf.append(text[i : i + 2])
                    i += 2
                    continue
                if text[i] == q:
                    s = "".join(buf)
                    after = text[i + 1 : i + 40]
                    if not re.match(r"\s*:", after):
                        strings.append(s)
                    i += 1
                    break
                buf.append(text[i])
                i += 1
        else:
            i += 1
    return strings


def en_like(s):
    if len(s) < 4:
        return False
    if re.search(r"[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]", s):
        return False
    if re.search(r"[\u00c0-\u024f]", s):
        return False
    if re.search(r"[\u3040-\u309f\u30a0-\u30ff]", s):
        return False
    words = re.findall(r"[A-Za-z]{3,}", s)
    return len(words) >= 2


for locale in ["es", "pt", "ja"]:
    total = 0
    by_file = {}
    files = sorted(CONTENT.glob(f"{locale}*.ts")) + [MESSAGES / f"{locale}.ts"]
    for fp in files:
        en_name = fp.name.replace(locale, "en", 1)
        en_path = CONTENT / en_name if (CONTENT / en_name).exists() else MESSAGES / en_name
        if not en_path.exists():
            continue
        en_set = set(extract_strings(en_path.read_text(encoding="utf-8")))
        hits = [s for s in extract_strings(fp.read_text(encoding="utf-8")) if s in en_set and en_like(s)]
        if hits:
            by_file[fp.name] = hits
            total += len(hits)
    print(f"\n=== {locale}: {total} untranslated ===")
    for name, hits in by_file.items():
        print(f"  {name}: {len(hits)}")
        for s in hits[:3]:
            print(f"    - {s[:100]}")
