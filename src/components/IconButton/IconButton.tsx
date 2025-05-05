import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import styles from "./IconButton.module.css";

const variants = cva(styles.iconButton, {
  variants: {
    variant: {
      round: styles.round,
    },
  },
  defaultVariants: {
    variant: undefined,
  },
});

interface Props extends VariantProps<typeof variants> {
  className?: string;
  Icon: LucideIcon;
  onClick: VoidFunction;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, Icon, onClick, ...variantProps }, ref) => {
    return (
      <button ref={ref} className={variants({ ...variantProps, className })} onClick={onClick}>
        <Icon className={styles.icon} />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
