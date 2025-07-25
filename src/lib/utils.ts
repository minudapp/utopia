import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ExtractStringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export function arrayToObject<
  Item,
  Identifier extends ExtractStringPropertyNames<Item>,
>(array: Item[], identifier: Identifier): Record<string, Item> {
  return array.reduce<Record<string, Item>>((acc, item) => {
    const key = item[identifier];

    if (typeof key !== "string") {
      throw new Error(
        `Identifier "${String(identifier)}" must be a string property`,
      );
    }

    acc[key] = item;
    return acc;
  }, {});
}
