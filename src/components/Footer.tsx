"use client";

import { useAppStore } from "../store/useAppStore";

export default function Footer() {
  const year = new Date().getFullYear();
  const isDarkMode = useAppStore((state) => state.isDarkMode);

  return (
    <footer className={`footer ${isDarkMode ? "footer-dark" : ""}`}>
      <p>© {year} GitHub Search. All rights reserved.</p>
    </footer>
  );
}
