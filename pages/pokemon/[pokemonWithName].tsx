import Logo from '@/Components/Logo';
import React from 'react';

const PokemonWithName = (props) => {
    console.log(props)
    const { pokemon } = props;
    return (
        <div>
            <div className='h-screen  pb-32' style={{ backgroundImage: `url(/Media-Asset/Texture.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                {/* logo  */}
                <Logo></Logo>

                {/* contents  */}
            </div>

            <h1>{pokemon.name}</h1>
        </div>
    );
};

export default PokemonWithName;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.pokemonWithName}`)
    const pokemon = await response.json()

    return {
        props: {
            pokemon
        }
    }
}
