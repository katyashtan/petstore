import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as mocks from "./mocks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * max) + min;
}

export const fetchMocked = <T extends keyof typeof mocks>(
  url: T
): Promise<{ json: () => Promise<(typeof mocks)[T]> }> =>
  new Promise((res) =>
    res({
      json: () => new Promise((resJson) => resJson(mocks[url])),
    })
  );
