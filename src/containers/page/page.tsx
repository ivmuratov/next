import { PropsWithChildren } from "react";
import styles from "./page.module.css";

export function Page({ children }: PropsWithChildren) {
  return <main className={styles.page}>{children}</main>;
}
