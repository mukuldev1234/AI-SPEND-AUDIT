"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } =
    useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-xl border border-white/10">
        <div className="w-[18px] h-[18px]" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="p-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}