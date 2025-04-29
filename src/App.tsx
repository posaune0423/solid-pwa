import { useBeforeLeave, useLocation } from "@solidjs/router";
import type { ParentComponent } from "solid-js";
import GlobalFooter from "./components/GlobalFooter";
import ScreenHeader from "./components/ScreenHeader";

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

  const location = useLocation();
  const getTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/about') return 'About';
    if (path === '/profile') return 'Profile';
    return 'Solid PWA';
  };

  return (
    <div class="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 overscroll-y-none">
      <ScreenHeader title={getTitle()} />

      <main class="flex-grow overflow-y-auto overscroll-contain pb-20">
        <div class="p-4 text-gray-900 dark:text-gray-100">
          {props.children}
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default App;
