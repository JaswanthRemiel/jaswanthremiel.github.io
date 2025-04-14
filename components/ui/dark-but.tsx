"use client";
import useTheme from "@/hooks/useTheme";
import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded border">
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
