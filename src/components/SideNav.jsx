import { useState } from 'react'
import {first151Pokemon, getFullPokedexNumber} from '../utils/index.js'

export default function SideNav(props){
    const { selectedPokemon , setSelectedPokemon , handleToggleMenu ,showSideMenu } = props ;

    const [searchValue , setSearchValue] = useState('');

    const filteredPokemon = first151Pokemon.filter((ele , eleIndex) => {
        if((getFullPokedexNumber(eleIndex)).includes(searchValue)) {return true}

        if(ele.toLowerCase().includes(searchValue.toLowerCase())) {return true}

        return false ;
    })
    return(
        <nav className={' '+ (!showSideMenu ? "open" : '')}>
            <div className={"header "+ (!showSideMenu ? "open" : '')}>
            <button className='open-nav-button' onClick={handleToggleMenu}>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
                <h1 className='text-gradient'>Pokedex</h1>
            </div>
            <input value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }}
                placeholder='Search...'
            />
            {filteredPokemon.map((pokemon , pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon) ;
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokedexNumber)
                        handleToggleMenu();
                    }}
                        key={pokemonIndex} className={'nav-card ' + 
                        (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        {pokemon}
                    </button>
                )
            })}
        </nav>
    )
}