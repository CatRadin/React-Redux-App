import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getPokemon } from '../actions'
import axios from 'axios'

const Pokemon = (props) => {
const { pokemonName, isFetching, error, getPokemon } = props
const handleClick = () => {
    // axios
    // .get('https://pokeapi.co/api/v2/pokemon?limit=828')
    // .then(res=>{
    //     let ranNum = Math.floor(Math.random() * 828)
    //     console.log(ranNum);
    //     console.log('NAME :', res.data.results[ranNum])
           
    //     // dispatch({type:FETCH_POKEMON_SUCCESS, payload:res.data});
    // })
    // .catch(err=>{
    //     // dispatch({type:FETCH_POKEMON_FAIL, payload:err.Response.code})
    // });
    props.getPokemon();
}

if (error){
    return <h2>We got an error: {error}</h2>
}
if(isFetching){
    return<h2>Fetching Pokemon for you!</h2>
}

    return(
        <>
        <h3>{pokemonName}</h3>
        <button onClick={handleClick}>Get new Pokemon</button>
        </>
    )
}
//Mapping my Props -----------------------------------------
const mapStateToProps = state => {
    return {
        pokemonName: state.pokemonName,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getPokemon })(Pokemon)