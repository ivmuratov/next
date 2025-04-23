"use client";

import { useBoolean } from "@/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components";
import clsx from "clsx";
import styles from "./sidebar.module.css";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useBoolean();

  return (
    <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
      <nav>
        <h2>Навигация</h2>
        <ul>
          <li>Главная</li>
          <li>Документы</li>
          <li>Настройки</li>
        </ul>
      </nav>
      <IconButton
        Icon={isCollapsed ? ChevronRight : ChevronLeft}
        onClick={setIsCollapsed.toggle}
        variant="round"
      />
    </aside>
  );
}
