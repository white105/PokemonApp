import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Pokedex from '../public/pokedex-transparent.png';
import PokedexLogo from '../public/pokedex-logo.png'

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [value, setValue] = useState('');

  const getSpecificPokemon = async (pokemon: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await res.json();
  
    const pokemonData = data
  
    console.log("pokemonData", pokemonData)
  
    const name = pokemonData["name"]
  
    const imageUrl = pokemonData["sprites"]["other"]["official-artwork"]["front_default"]

    const types = pokemonData["types"]

    console.log("types", types)

    setPokemonName(name)
    setPokemonImage(imageUrl)
    setPokemonTypes(types)
  };

  useEffect(() => {

    /* 
    const getRandomPokemon = async () => {

      const randomNumber = 1 + Math.floor(Math.random() * 900)
    
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    
      const data = await res.json();
    
      const pokemonData = data
    
      console.log("pokemonData", pokemonData)
    
      const name = pokemonData["name"]
    
      const imageUrl = pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
    
      setPokemonName(name)
      setPokemonImage(imageUrl)
    
    };
    getRandomPokemon()
    */




  }, [pokemonName, pokemonImage]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokedex
        </h1>
      </main>

      <div className={styles.inputContainer}>
        <h3 className={styles.title}>Enter A Pokemon Name Or Pokedex Number</h3>
        <input className={styles.input} 
        type="text" placeholder="Enter A Pokemon Name Or Pokedex Number" value={value}
        onChange={e => { setValue(e.currentTarget.value); }}></input>
          
      <button className={styles.button} onClick={() => getSpecificPokemon(value)}>Get Pokemon Data</button>
      </div>


    <div className={styles.pokemonContainer}>
      <h3 className={styles.pokemonName}>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h3>
      <Image alt="There is no alt sry" className={styles.pokedex} src={Pokedex}/>

      {(pokemonName == "") ? 
       <Image alt="Alt doesnt mean alternative i guess lol" src={PokedexLogo} className={styles.pokedexLogo}/> : 
       <img className={styles.pokemonImage} src={pokemonImage}></img>}

      <div className={styles.pokemonTypes}>
        {pokemonTypes.map((type) => {
          const typeString = type["type"]["name"];
          let emoji = "";
          switch(typeString) {
            case "water":
              emoji = "????"
              break;
            case "rock":
              emoji = "????"
              break;
            case "fire":
              emoji = "????"
              break;
            case "grass":
              emoji = "????"
              break;
            case "flying":
              emoji = "????"
              break;
            case "fighting":
              emoji = "????"
              break;
            case "poison":
              emoji = "??????"
              break;
            case "electric":
              emoji = "???"
              break;
            case "ground":
              emoji = "????"
              break;
            case "psychic":
              emoji = "????"
              break;
            case "ice":
              emoji = "????"
              break;
            case "bug":
              emoji = "????"
              break;
            case "ghost":
              emoji = "????"
              break;
            case "steel":
              emoji = "????"
              break;
            case "dragon":
              emoji = "????"
              break;
            case "dark":
              emoji = "????"
              break;
            case "fairy":
              emoji = "????"
              break;
            default:
              emoji = "";
          }

          return <h3 key={type["slot"]}>{emoji}</h3>
          })}
      </div>
  
      
    </div>

    </div>
  )
}
