import { Sidebar } from "@/containers";
import type { PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      {children}
    </div>
  );
}
