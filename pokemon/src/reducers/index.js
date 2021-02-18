import { FETCH_POKEMON_LOADING, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL} from '../actions';

//Initial State on Load in -----------------------------------------------
const initialState = {
    pokemans:'Pikachu',
    pokemonName:'',
    isFetching: false,
    error:'',
    success: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_POKEMON_LOADING):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_POKEMON_SUCCESS):
            return({
                 ...state,
                pokemans: action.payload,
                 isFetching: false,
                 success: true,
                });
        case(FETCH_POKEMON_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false,
                success: false,
            })
        default:
            return state;
    }
}
