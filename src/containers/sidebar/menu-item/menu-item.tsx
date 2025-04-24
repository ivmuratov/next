import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuItem } from "../models";
import clsx from "clsx";
import styles from "./menu-item.module.css";

interface Props extends MenuItem {
  isCollapsed: boolean;
}

export function MenuItem({ Icon, label, href, isCollapsed }: Props) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={href} className={clsx(styles.link, pathname === href && styles.active)}>
        <Icon />
        <span className={clsx(styles.label, isCollapsed && styles.hidden)}>{label}</span>
      </Link>
    </li>
  );
}
