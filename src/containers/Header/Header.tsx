"use client";

import { Flex, Switch } from "@/components";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Flex as="header" className={styles.header} justify="center" align="center">
      MAIN HEADER
      <Switch checked={theme === "dark"} onChange={handleSetTheme} />
    </Flex>
  );
}
