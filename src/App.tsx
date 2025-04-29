import { useBeforeLeave } from "@solidjs/router";
import type { ParentComponent } from "solid-js";
import GlobalFooter from "./components/GlobalFooter";

const App: ParentComponent = (props) => {
  useBeforeLeave((e) => {
    if (!document.startViewTransition) {
      console.log("View Transitions not supported, skipping.");
      return;
    }

    console.log(
      "useBeforeLeave: Preventing default and starting transition for",
      e.to,
    );
    e.preventDefault();

    const transition = document.startViewTransition(() => {
      console.log("useBeforeLeave: Running e.retry inside startViewTransition");
      e.retry(true);
    });

    transition.finished.then(() => console.log("View transition finished."));
    transition.ready.then(() =>
      console.log("View transition ready (pseudo-elements created)."),
    );
    transition.updateCallbackDone.then(() =>
      console.log("View transition DOM update callback done."),
    );
  });

  return (
    <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main content area */}
      <main class="flex-grow overflow-y-auto overscroll-contain pt-safe-top pb-20">
        {/* Removed extra padding from main, apply padding within pages or this container */}
        <div class="p-4 text-gray-900 dark:text-gray-100">
          {/* Suspense is removed as vite-plugin-pages handles it often */}
          {/* If you need Suspense for specific resources, add it within the page components */}
          {props.children}
        </div>
      </main>

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
};

export default App;
