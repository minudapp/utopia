export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}

export function isObject(value: unknown): value is NonNullable<object> {
  return !isNull(value) && typeof value === "object";
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

export function isWeakMap(value: unknown): value is WeakMap<WeakKey, unknown> {
  return value instanceof WeakMap;
}

export function isWeakSet(value: unknown): value is WeakSet<WeakKey> {
  return value instanceof WeakSet;
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export function isNonEmptyArray(
  value: unknown,
): value is [unknown, ...unknown[]] {
  return isArray(value) && value.length > 0;
}

export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.length > 0;
}

export function isPositive(value: unknown): value is number {
  return isNumber(value) && value > 0;
}

export function isNegative(value: unknown): value is number {
  return isNumber(value) && value < 0;
}

export function isInteger(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value);
}

export function isPositiveInteger(value: unknown): value is number {
  return isInteger(value) && value > 0;
}

export function isNonNegativeInteger(value: unknown): value is number {
  return isInteger(value) && value >= 0;
}

export function isNegativeInteger(value: unknown): value is number {
  return isInteger(value) && value < 0;
}
