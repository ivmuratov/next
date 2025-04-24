import { Home, Settings } from "lucide-react";
import { MenuItem } from "./models";

export const MENU_ITEMS: MenuItem[] = [
  { Icon: Home, label: "Главная", href: "/" },
  { Icon: Settings, label: "Настройки", href: "/settings" },
];
