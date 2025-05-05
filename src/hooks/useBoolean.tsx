"use client";

import { useState } from "react";

export function useBoolean(toggled = false) {
  const [isToggled, setIsToggled] = useState(toggled);

  const on = () => {
    setIsToggled(true);
  };

  const off = () => {
    setIsToggled(false);
  };

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, { on, off, toggle }] as const;
}
