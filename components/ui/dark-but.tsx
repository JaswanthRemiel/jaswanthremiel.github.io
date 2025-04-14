"use client";
import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded border">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
