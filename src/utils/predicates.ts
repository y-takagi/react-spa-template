export function isPresent<T extends string | unknown[]>(value: T | null | undefined): value is T {
  return value != null && value.length > 0;
}
