import axios from 'axios';
export const FETCH_POKEMON_LOADING = "FETCH_POKEMON_LOADING";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL";


//An action made through Thunk that uses a random number to grab a pokemon from the API Call -------------------------------
export const getPokemon = () => {
    return dispatch => {
        let ranNum = Math.floor(Math.random() * 828 -1)
        dispatch({ type:FETCH_POKEMON_LOADING });
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=828')
        .then(res=>{
            console.log('NAME :', res.data.results[ranNum])
            dispatch({type:FETCH_POKEMON_SUCCESS, payload:res.data.results[ranNum]});
        })
        .catch(err=>{
            // dispatch({type:FETCH_POKEMON_FAIL, payload:err.Response.code})
        });
    }
}

// export const fetchPokemonLoading = () => {
//     return({ type:FETCH_POKEMON_LOADING});
// }

// export const fetchPokemonSuccess = (pokemonName) => {
//     return({type:FETCH_POKEMON_SUCCESS, payload:pokemonName});
// }

// export const fetchPokemonFail = (error) => {
//     return({type:FETCH_POKEMON_FAIL, payload:error});
// }