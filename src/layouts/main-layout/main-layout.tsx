import { Sidebar } from "@/containers";
import type { PropsWithChildren } from "react";
import styles from "./main-layout.module.css";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
}
