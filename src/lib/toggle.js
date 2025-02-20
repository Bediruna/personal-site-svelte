import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

const ThemeSwitcher = () => (
  <div className="p-2 dark:bg-slate-800 bg-slate-200 shadow-md rounded-full aspect-square">
    <SunIcon onClick={setThemeDark} className="dark:hidden cursor-pointer" />
    <MoonIcon
      onClick={setThemeLight}
      className="hidden dark:block cursor-pointer"
    />
  </div>
);

/* - nothing interesting below - */

const App = () => (
  <main className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 min-h-svh place-content-center grid">
    <ThemeSwitcher />
  </main>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

const SunIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </g>
  </svg>
);

const MoonIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"
    />
  </svg>
);
