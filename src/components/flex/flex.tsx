import { cva, VariantProps } from "class-variance-authority";
import { ElementType, forwardRef, PropsWithChildren } from "react";
import styles from "./flex.module.css";

const variants = cva(styles.flex, {
  variants: {
    direction: {
      row: styles.row,
      rowReverse: styles.rowReverse,
      column: styles.column,
      columnReverse: styles.columnReverse,
    },
    justify: {
      start: styles.justifyStart,
      end: styles.justifyEnd,
      center: styles.justifyCenter,
      between: styles.justifyBetween,
      around: styles.justifyAround,
      evenly: styles.justifyEvenly,
    },
    align: {
      start: styles.alignStart,
      end: styles.alignEnd,
      center: styles.alignCenter,
      baseline: styles.alignBaseline,
      stretch: styles.alignStretch,
    },
    wrap: {
      nowrap: styles.nowrap,
      wrap: styles.wrap,
      wrapReverse: styles.wrapReverse,
    },
    gap: {
      xs: styles.gapXs,
      sm: styles.gapSm,
      md: styles.gapMd,
      lg: styles.gapLg,
      xl: styles.gapXl,
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "start",
    align: "stretch",
    wrap: "nowrap",
    gap: "md",
  },
});

interface Props extends PropsWithChildren, VariantProps<typeof variants> {
  className?: string;
  as?: ElementType;
}

export const Flex = forwardRef<HTMLDivElement, Props>(
  ({ className, as: Tag = "div", children, ...variantProps }, ref) => {
    return (
      <Tag ref={ref} className={variants({ ...variantProps, className })}>
        {children}
      </Tag>
    );
  }
);

Flex.displayName = "Flex";
