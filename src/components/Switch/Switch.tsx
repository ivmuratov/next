import { Switch as HeadlessSwitch } from "@headlessui/react";
import { forwardRef } from "react";
import styles from "./Switch.module.css";

interface Props {
  checked: boolean;
  onChange: VoidFunction;
}

export const Switch = forwardRef<HTMLButtonElement, Props>(({ checked, onChange }, ref) => {
  return (
    <HeadlessSwitch ref={ref} checked={checked} onChange={onChange} className={styles.switch}>
      <span aria-hidden="true" className={styles.thumb} />
    </HeadlessSwitch>
  );
});

Switch.displayName = "Switch";
