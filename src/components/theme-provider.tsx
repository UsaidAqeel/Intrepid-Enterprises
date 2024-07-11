"use client";

import { ThemeProvider as NextTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = (props: ThemeProviderProps) => (
  <NextTheme {...props} />
);