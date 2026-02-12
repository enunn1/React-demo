"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type ThemeToggleProps = {
  testid: string;
}

export default function ThemeToggle(props: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      data-testid={props.testid}
      className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
      aria-label="Toggle Light/Dark Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Moon/> : <Sun/>}
    </button>
  );
}
