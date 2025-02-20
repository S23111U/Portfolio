/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const darkMode = {
  darkMode: "class",
};
export const plugins = [heroui({ addCommonColors: true })];
