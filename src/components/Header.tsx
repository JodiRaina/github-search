"use client";
import { useAppStore } from "../store/useAppStore";

export default function Header() {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  return (
    <header className="header">
      <h1>GitHub Search</h1>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
