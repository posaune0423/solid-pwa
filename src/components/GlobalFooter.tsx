import { A } from "@solidjs/router";
import { FiHome, FiInfo, FiUser } from "solid-icons/fi";
import { Component } from "solid-js";

const GlobalFooter: Component = () => {
  return (
    <footer class="sticky bottom-0 left-0 right-0 z-10 glassmorphism-footer shadow-md border-t border-gray-200 dark:border-gray-700/50 pt-2 pb-safe-[max(8px,_env(safe-area-inset-bottom))] px-safe">
      <nav class="flex justify-around items-center h-14">
        <A
          href="/"
          class="flex flex-col items-center justify-center text-xs px-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
          activeClass="text-blue-600 dark:text-blue-400 font-semibold"
          end
        >
          <FiHome size={24} class="mb-1" />
          <span class="mt-0">Home</span>
        </A>
        <A
          href="/about"
          class="flex flex-col items-center justify-center text-xs px-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
          activeClass="text-blue-600 dark:text-blue-400 font-semibold"
        >
          <FiInfo size={24} class="mb-1" />
          <span class="mt-0">About</span>
        </A>
        <A
          href="/profile"
          class="flex flex-col items-center justify-center text-xs px-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
          activeClass="text-blue-600 dark:text-blue-400 font-semibold"
        >
          <FiUser size={24} class="mb-1" />
          <span class="mt-0">Profile</span>
        </A>
      </nav>
    </footer>
  );
};

export default GlobalFooter;
