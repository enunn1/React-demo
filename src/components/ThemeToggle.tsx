"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
      aria-label="Toggle Light/Dark Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon/> : <Sun/>}
    </button>
  );
}
