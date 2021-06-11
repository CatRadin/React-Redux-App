import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getPokemon } from '../actions'
import axios from 'axios'



const Pokemon = (props) => {
    //State passed in through Redux---------------------------------------
const { pokemans, isFetching, error, getPokemon, success } = props
//State used only here in Pokemon-----------------------------------------
const [pokemon, setPokemon] = useState({
    name: 'Pikachu',
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        other: {
            official_artwork: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            }
        }
    },
    types: [{ 
        type: {
            name: "electric",
        }
    
    }]
})
//A use Effect that grabs the pokemon url from pokemans in Actions and fetches the data inside to be used in state here in Pokemon! ---------------------------
useEffect(() => {
    axios.get(`${pokemans.url}`)
        .then(res => {
            console.log("look here", res)
            setPokemon(res.data)
        })
}, [pokemans])

//A click Handler to use the getPokemon action I made in actions. It fetches an random pokemon from the API
const handleClick = () => {
    props.getPokemon(); 
}


    return(
        <>
        <div className='pokedex-container'>
        <h3>{pokemon.name}</h3>
        <div className='middle'>
        <img src={pokemon.sprites.front_default} alt='a pokemon'></img>
        <p><span className='type'>{pokemon.types[0].type.name}</span> Pokemon</p>
        </div>
        <button onClick={handleClick}>Get a random Pokemon</button>
        </div>
        </>
    )
}
//Mapping my Props -----------------------------------------
const mapStateToProps = state => {
    return {
        pokemans: state.pokemans,
        isFetching: state.isFetching,
        error: state.error,
        success: state.success
    }
}
export default connect(mapStateToProps, { getPokemon })(Pokemon)