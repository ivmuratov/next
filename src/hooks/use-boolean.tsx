"use client";

import { useState } from "react";

type UseBooleanReturn = [boolean, { on: VoidFunction; off: VoidFunction; toggle: VoidFunction }];

export function useBoolean(toggled = false): UseBooleanReturn {
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

  return [isToggled, { on, off, toggle }];
}
