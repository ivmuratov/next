import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/providers";
import { robotoMono } from "@/constants";
import "@/styles/globals.css";
import { MainLayout } from "@/layouts";

export { metadata } from "@/constants";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
