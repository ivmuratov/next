"use client";

import { useBoolean } from "@/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Flex, IconButton } from "@/components";
import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./MenuItem";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useBoolean();

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
        className={styles.collapseSwitcherButton}
        Icon={isCollapsed ? ChevronRight : ChevronLeft}
        onClick={setIsCollapsed.toggle}
        variant="round"
      />
    </Flex>
  );
}
