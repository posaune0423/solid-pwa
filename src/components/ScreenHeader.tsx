import { Component } from 'solid-js';

interface ScreenHeaderProps {
  title: string;
}

const ScreenHeader: Component<ScreenHeaderProps> = (props) => {
  return (
    <header class="top-0 left-0 right-0 z-20 min-h-12 h-12 shadow-sm flex items-center justify-center">
      <h1 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {props.title}
      </h1>
      {/* Add optional left/right action buttons here if needed */}
    </header>
  );
};

export default ScreenHeader;