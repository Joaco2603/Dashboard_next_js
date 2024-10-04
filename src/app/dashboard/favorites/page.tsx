import { FavoritePokemons } from "@/pokemons";
import { useAppSelector } from "@/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite pokemons",
  description: "Favorite pokemons of user",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
