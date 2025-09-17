"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="w-full flex justify-center">
      <div className="lg:w-[60%] w-[80%] flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link
            href="/"
            className=" text-2xl dark:text-yellow-500 text-yellow-700 opacity-90"
          >
            blogs
          </Link>
          <span className="font-poppins text-4xl -translate-y-1">.</span>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 h-12 flex items-center justify-center rounded-full dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-200 text-neutral-800 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity duration-300"
        >
          {theme === "dark" ? (
            <IconSun className="w-5 h-5" />
          ) : (
            <IconMoon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
