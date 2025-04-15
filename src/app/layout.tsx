import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/providers";
import { robotoMono } from "@/constants";
import { Sidebar } from "@/containers";
import "@/styles/globals.css";

export { metadata } from "@/constants";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
