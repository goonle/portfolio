"use client";

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...input) {
    return twMerge(clsx(input))
}

export const isIframe = typeof window !== "undefined" &&
    window.self !== window.top;