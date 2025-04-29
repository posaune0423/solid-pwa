import { Component } from "solid-js";

const About: Component = () => {
  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        About Page
      </h1>
      <p class="text-gray-700 dark:text-gray-300">
        This is the about page content. Here we can explain the purpose of this
        awesome SolidJS PWA.
      </p>

      {/* Example scrollable section */}
      <div class="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 h-96 scrollable-content">
        <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          More Details
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          You can put more detailed information here that might require
          scrolling.
        </p>
        {/* Add long content to demonstrate scrolling */}
        <p class="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... [very
          long text] ...{" "}
        </p>
        <div class="h-[100vh]" /> {/* Force scroll */}
      </div>
    </div>
  );
};

export default About;
