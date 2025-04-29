import { A } from "@solidjs/router";
import { FiHome, FiInfo, FiUser } from "solid-icons/fi";
import { Component } from "solid-js";

const GlobalFooter: Component = () => {
  // Active class solely defines the active color
  const activeLinkClasses = "text-blue-600 dark:text-blue-400";
  // Base classes no longer define a base text color, only hover effects
  const baseLinkClasses = "hover:text-blue-600 dark:hover:text-blue-400";

  return (
    <footer class="sticky bottom-0 left-0 right-0 z-10 glassmorphism-footer shadow-md border-t border-gray-200 dark:border-gray-700/50 pt-1 pb-safe px-safe">
      <nav class="flex justify-around items-stretch h-14">
        <A
          href="/"
          class={`flex-1 transition-colors duration-150 ${baseLinkClasses}`}
          activeClass={activeLinkClasses}
          end
        >
          <div class="flex flex-col items-center justify-center h-full pt-1">
            <FiHome size={24} />
            <span class="text-xs mt-1">Home</span>
          </div>
        </A>
        <A
          href="/about"
          class={`flex-1 transition-colors duration-150 ${baseLinkClasses}`}
          activeClass={activeLinkClasses}
        >
          <div class="flex flex-col items-center justify-center h-full pt-1">
            <FiInfo size={24} />
            <span class="text-xs mt-1">About</span>
          </div>
        </A>
        <A
          href="/profile"
          class={`flex-1 transition-colors duration-150 ${baseLinkClasses}`}
          activeClass={activeLinkClasses}
        >
          <div class="flex flex-col items-center justify-center h-full pt-1">
            <FiUser size={24} />
            <span class="text-xs mt-1">Profile</span>
          </div>
        </A>
      </nav>
    </footer>
  );
};

export default GlobalFooter;
