import { FETCH_POKEMON_LOADING, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL} from '../actions';

//Initial State on Load in -----------------------------------------------
const initialState = {
    pokemonName:'',
    isFetching: false,
    error:''
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
                pokemonName: action.payload,
                 isFetching: false
                });
        case(FETCH_POKEMON_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
}
