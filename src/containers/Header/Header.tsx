"use client";

import { Flex, IconButton } from "@/components";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Flex as="header" className={styles.header} justify="center" align="center">
      MAIN HEADER
      <IconButton
        className={styles.themeSwitcherButton}
        Icon={theme === "dark" ? Sun : Moon}
        onClick={handleSetTheme}
        variant="round"
      />
    </Flex>
  );
}
