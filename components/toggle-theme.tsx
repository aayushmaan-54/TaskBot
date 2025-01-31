"use client";
import { Moon, Sun } from "@/assets/svg/svg";
import { useTheme } from "next-themes";


export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  );
}