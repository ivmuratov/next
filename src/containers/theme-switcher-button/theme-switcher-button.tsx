"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./theme-switcher-button.module.css";

export function ThemeSwitcherButton() {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      className={styles["theme-switcher"]}
      aria-label="Toggle switcher"
      onClick={handleSetTheme}
    >
      {theme === "dark" ? <Sun className={styles.icon} /> : <Moon className={styles.icon} />}
    </button>
  );
}
