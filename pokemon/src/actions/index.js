import axios from 'axios';
export const FETCH_POKEMON_LOADING = "FETCH_POKEMON_LOADING";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL";

export const getPokemon = () => {
    //1. start load
    //2. do our call
    //3. success on a successful call
    //4. fail on a failed call
    return dispatch => {
        dispatch({ type:FETCH_POKEMON_LOADING });
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=828')
        .then(res=>{
            let ranNum = Math.floor(Math.random() * 828)
            console.log(ranNum);
            console.log('NAME :', res.data.results[ranNum].url)
            dispatch({type:FETCH_POKEMON_SUCCESS, payload:res.data.results[ranNum].name});
        })
        .catch(err=>{
            // dispatch({type:FETCH_POKEMON_FAIL, payload:err.Response.code})
        });
    }
}

export const fetchPokemonLoading = () => {
    return({ type:FETCH_POKEMON_LOADING});
}

export const fetchPokemonSuccess = (pokemonName) => {
    return({type:FETCH_POKEMON_SUCCESS, payload:pokemonName});
}

export const fetchPokemonFail = (error) => {
    return({type:FETCH_POKEMON_FAIL, payload:error});
}