"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconButton } from "@/components";

interface Props {
  className?: string;
}

export function ThemeSwitcherButton({ className }: Props) {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <IconButton
      className={className}
      aria-label="Toggle switcher"
      Icon={theme === "dark" ? Sun : Moon}
      onClick={handleSetTheme}
    />
  );
}
