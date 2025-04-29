import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    // Removed section, rely on App.tsx for base layout and padding
    <>
      <h1 class="text-3xl font-bold mb-6">Welcome Home!</h1>
      <p class="mb-4">This is a simple counter example.</p>

      <div class="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors duration-150 ease-in-out"
          onClick={() => setCount(count() - 1)}
        >
          Decrement
        </button>

        <output class="p-2 font-mono text-lg">{count()}</output>

        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-150 ease-in-out"
          onClick={() => setCount(count() + 1)}
        >
          Increment
        </button>
      </div>

      {/* Add some more content */}
      <div class="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">More Content</h2>
        <p>Add other components or information here.</p>
      </div>
    </>
  );
}
