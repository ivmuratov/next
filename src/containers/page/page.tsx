import { PropsWithChildren } from "react";
import styles from "./Page.module.css";

export function Page({ children }: PropsWithChildren) {
  return <main className={styles.page}>{children}</main>;
}
