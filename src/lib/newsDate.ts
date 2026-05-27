const MONTH_MAP: Record<string, string> = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
}

/** Parses `newsData` display dates like `15 May 2026` to ISO `YYYY-MM-DD` for structured data. */
export function newsDisplayDateToIso(display: string): string | undefined {
  const parts = display.trim().split(/\s+/)
  if (parts.length !== 3) return undefined
  const [dayRaw, monthName, year] = parts
  const mm = MONTH_MAP[monthName]
  if (!mm || !/^\d{4}$/.test(year)) return undefined
  const day = dayRaw.padStart(2, '0')
  return `${year}-${mm}-${day}`
}
