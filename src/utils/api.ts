export interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  // Add other fields if needed
}

// Define the structure for the API response envelope
interface PokemonApiResponse {
  data: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

// Function to fetch Pokémon cards from the API
export const fetchPokemonCards = async (page: number = 1): Promise<PokemonCard[]> => {
  try {
    // Fetching the first page (default pageSize is 250, limiting to ~24 for display)
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?pageSize=24&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json: PokemonApiResponse = await response.json();
    return json.data; // Return the array of cards
  } catch (error) {
    console.error("Failed to fetch Pokemon cards:", error);
    // Re-throw error to be caught by useQuery
    throw error;
  }
};