import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/providers";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // === Базовые метатеги === //
  title: {
    default: "Крутой магазин | Официальный сайт", // Дефолтный title (если не указан на странице)
    template: "%s | Крутой магазин", // Шаблон для дочерних страниц (%s заменится на title страницы)
  },
  description: "Лучший интернет-магазин с доставкой по всей России. Гарантия качества!", // До 160 символов
  keywords: ["интернет магазин", "купить онлайн", "доставка", "техника"], // Необязательно, но помогает в SEO

  // === URL и индексация === //
  metadataBase: new URL("https://ваш-сайт.ru"), // Базовый URL (обязательно для OG-тегов!)
  alternates: {
    canonical: "/", // Главная страница (для остальных указывается на каждой странице)
    languages: {
      "ru-RU": "/ru", // Если есть мультиязычность
      "en-US": "/en",
    },
  },
  robots: {
    index: true, // Разрешить индексацию
    follow: true, // Разрешить переход по ссылкам
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large", // Разрешить превью изображений в поиске
    },
  },

  // === Open Graph (для соцсетей) === //
  openGraph: {
    title: "Крутой магазин | Официальный сайт",
    description: "Лучший интернет-магазин с доставкой по всей России!",
    url: "https://ваш-сайт.ru", // Полный URL
    siteName: "Крутой магазин",
    images: [
      {
        url: "/og-image.jpg", // Путь к изображению (1200x630px)
        width: 1200,
        height: 630,
        alt: "Главная страница магазина",
      },
    ],
    locale: "ru_RU", // Язык и регион
    type: "website", // Тип контента (для статей — 'article')
  },

  // === Twitter Card === //
  twitter: {
    card: "summary_large_image", // Формат карточки
    title: "Крутой магазин | Официальный сайт",
    description: "Лучший интернет-магазин с доставкой!",
    images: ["https://ваш-сайт.ru/og-image.jpg"], // Абсолютный путь!
    creator: "@ваш-twitter-аккаунт", // Опционально
  },

  // === Иконки (favicon, apple-touch-icon) === //
  icons: {
    icon: "/favicon.ico", // Стандартная иконка
    shortcut: "/favicon-16x16.png", // Для ярлыков
    apple: "/apple-touch-icon.png", // Для iOS
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5", // Цвет иконки в Safari
      },
    ],
  },

  // === Верификация для Google/Yandex === //
  verification: {
    google: "google-verification-code", // Код из Google Search Console
    yandex: "yandex-verification-code", // Код из Яндекс.Вебмастера
  },

  // === Дополнительные настройки === //
  manifest: "/site.webmanifest", // Для PWA (если есть)
  authors: [{ name: "Ваша компания", url: "https://ваш-сайт.ru" }],
  formatDetection: {
    telephone: false, // Отключить автоматическое определение телефонов (мешает SEO)
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
