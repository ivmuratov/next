"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./theme-switcher.module.css";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button onClick={handleSetTheme} className={styles.button} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className={styles.icon} /> : <Moon className={styles.icon} />}
    </button>
  );
}
