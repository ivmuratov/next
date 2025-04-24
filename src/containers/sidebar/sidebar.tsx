"use client";

import { useBoolean } from "@/hooks";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { Flex, IconButton } from "@/components";
import { useTheme } from "next-themes";
import clsx from "clsx";
import styles from "./sidebar.module.css";
import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./menu-item";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useBoolean();
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Flex
      as="aside"
      className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}
      direction="column"
    >
      <nav>
        <Flex as="ul" className={styles.menu} direction="column">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.href} isCollapsed={isCollapsed} {...item} />
          ))}
        </Flex>
      </nav>

      <IconButton
        className={styles.themeSwitcherButton}
        Icon={theme === "dark" ? Sun : Moon}
        onClick={handleSetTheme}
        variant="round"
      />
      <IconButton
        className={styles.collapseSwitcherButton}
        Icon={isCollapsed ? ChevronRight : ChevronLeft}
        onClick={setIsCollapsed.toggle}
        variant="round"
      />
    </Flex>
  );
}
