import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getPokemon } from '../actions'
import axios from 'axios'



const Pokemon = (props) => {
const { pokemans, isFetching, error, getPokemon, success } = props
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




useEffect(() => {
    axios.get(`${pokemans.url}`)
        .then(res => {
            console.log("look here", res)
            setPokemon(res.data)
        })
}, [pokemans])

console.log('Pokenonxxx',pokemon)
// console.log(pokemon.sprites.front_default)

const handleClick = () => {
    props.getPokemon(); 
}

// if (success){
//     return <h2>We got an error: {error}</h2>
// }
// if(isFetching){
//     return<h2>Fetching a Pokemon for you!</h2>
// }
// console.log('TYPE HERE:', pokemon.types[0].type.name)

    return(
        <>
        <div className='pokedex-container'>
        
        <h3>{pokemon.name}</h3>
        <div className='middle'>
        <img src={pokemon.sprites.front_default} alt='a pokemon'></img>
        <p>{pokemon.types[0].type.name} Pokemon</p>
        </div>
        
        {/* <img src={pokemon.sprites.other.official_artwork.front_default} alt='a pokemon'></img> */}
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