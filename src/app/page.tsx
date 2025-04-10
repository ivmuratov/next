import { ThemeSwitcher } from "@/containers";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <ThemeSwitcher />
    </main>
  );
}
