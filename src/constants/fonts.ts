import { Roboto_Mono } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
  adjustFontFallback: true,
});
