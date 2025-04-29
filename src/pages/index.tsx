import { useQuery } from "@tanstack/solid-query";
import { Component, For, Index, Show } from "solid-js";
import { fetchPokemonCards, PokemonCard } from "../utils/api"; // Reverted imports

const Home: Component = () => {
  // Removed offset signal
  const itemsToFetch = 24; // TCG API fetches 24

  const query = useQuery(() => ({
    queryKey: ["pokemonCards"], // Reverted queryKey
    queryFn: () => fetchPokemonCards(Math.floor(Math.random() * 100)), // Reverted queryFn

    // --- Disable automatic refetching ---
    refetchOnWindowFocus: false,
    refetchOnMount: false, // Don't refetch automatically on mount if stale
    refetchOnReconnect: false,
    // Keep data indefinitely fresh, rely only on manual refetch
    staleTime: Infinity,
    // placeholderData is not needed when not changing queryKey dynamically
    // placeholderData: (previousData) => previousData,
  }));

  // Removed fetchNewRandomPokemon function

  return (
    <div class="p-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Pokémon TCG Cards</h1>
        <button
          // onClick now directly calls refetch
          onClick={() => query.refetch()}
          disabled={query.isFetching}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {/* Changed button text back */}
          {query.isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Skeleton Loader - Adjusted for TCG Card style */}
      <Show when={query.isLoading}>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Index each={Array(itemsToFetch)}>{() =>
            <div class="bg-gray-200 dark:bg-gray-700 rounded-lg shadow overflow-hidden h-60 animate-pulse">
              {/* TCG card skeleton - might need height adjustment based on real cards */}
            </div>
          }</Index>
        </div>
      </Show>

      {/* Removed background fetching indicator */}

      {/* Error State */}
      <Show when={query.isError && !query.isFetching}>
        <p class="text-center text-red-500">
          Failed to load cards: {query.error?.message}. Please try again later.
        </p>
      </Show>

      {/* No Data State */}
      <Show when={!query.isLoading && !query.isError && query.data?.length === 0}>
        <p class="text-center text-gray-500 dark:text-gray-400">
          No cards found.
        </p>
      </Show>

      {/* Success State - Display TCG Cards */}
      <Show when={query.data && query.data.length > 0}>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Updated loop variable type to PokemonCard */}
          <For each={query.data}>{(card: PokemonCard) =>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden text-center transform hover:scale-105 transition-transform duration-200 ease-in-out">
              <img
                src={card.images.small} // Use TCG image source
                alt={card.name}
                // Adjusted image styling for TCG cards
                class="w-full object-contain p-1"
                loading="lazy"
              />
              {/* Optional: Add name below image */}
              {/* <p class="text-sm font-semibold p-1 capitalize truncate">{card.name}</p> */}
            </div>
          }</For>
        </div>
      </Show>
    </div>
  );
};

export default Home;
