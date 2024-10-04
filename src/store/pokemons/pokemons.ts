import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* 
{
    1: {id: 1, name: "Bulbasaur"}
}
*/

interface PokemonsFavoriteState {
    favorites: { [key: string]: SimplePokemon },
}

const getInitialState = () => {

    if (typeof localStorage === "undefined") return {};

    const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");

    return favorites;
}


const initialState: PokemonsFavoriteState = {
    ...getInitialState()
}

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },
        toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;

            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                return;
            }
            state.favorites[id] = pokemon;
        }
    }
});

export const { toogleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;