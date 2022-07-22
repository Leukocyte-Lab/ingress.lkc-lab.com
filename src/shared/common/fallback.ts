export const fallback = <T>(value: T | undefined, fallback: T): T =>
  value === undefined || value === null ? fallback : value;
