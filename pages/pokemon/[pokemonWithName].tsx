import Logo from '@/Components/Logo';
import React from 'react';

const PokemonWithName = (props) => {
    console.log(props)
    const { pokemon } = props;

    const pokemonID = ('000' + (pokemon.id)).slice(-3)
    const pokemonName = pokemon.name[0] + pokemon.name.slice(1)
    const height = ((pokemon.height) / 2.54).toFixed(2)
    const pokemonWeight = ((pokemon.weight) / 2.205).toFixed(2)
    const pokemonImage = pokemon?.sprites?.other?.home?.front_default
    console.log(pokemonImage)
    const pokemonAbilities = () => (
        pokemon.abilities.map(ability => (
            <p key={ability.slot} className=" capitalize  text-xs font-semibold ">
                {ability.ability.name}
            </p>
        ))
    )
    const pokemonTypes = () => (
        pokemon.types.map(type => (
            <span key={type.slot} className=" rounded-sm  px-2 py-1 bg-green-700 text-white text-sm font-semibold mr-2">
                {type.type.name}
            </span>
        ))
    )

    const pokemonStats = () => (
        pokemon.stats.map((stat, index) => (
            <div key={index} className="bg-slate-700 my-2 p-1">
                <div className="bg-slate-900  px-2" style={{ width: `${stat.base_stat}%` }}>
                    {stat.stat.name}: {stat.base_stat}
                </div>
            </div>
        ))
    )



    const pokemonTypeColor = {
        bug: ' bg-green-400',
        dark: ' bg-gray-800',
        dragon: ' bg-purple-800',
        electric: ' bg-yellow-400',
        fairy: ' bg-pink-400',
        fighting: ' bg-red-900',
        fire: ' bg-red-400',
        flying: ' bg-indigo-600',
        ghost: ' bg-indigo-700',
        grass: ' bg-green-600',
        ground: ' bg-yellow-700',
        ice: ' bg-blue-400',
        normal: ' bg-gray-500',
        poison: ' bg-purple-600',
        psychic: ' bg-pink-700',
        rock: ' bg-yellow-600',
        steel: ' bg-gray-400',
        water: ' bg-blue-500',
    }

    return (
        <div>
            <div className='h-screen  pb-32' style={{ backgroundImage: `url(/Media-Asset/Texture.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                {/* logo  */}
                <Logo></Logo>

                {/* contents  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-24  pb-32'>
                    {/* part 1 */}
                    <div className='flex flex-col gap-y-10'>
                        <p className='text-4xl font-bold text-blue-600'>{pokemonName} {pokemonID}</p>
                        <p className='text-md'>There is a plant seed on its back right from the day this POKéMON is born. The seed slowly grows larger.</p>

                        {/*cut corner box  */}
                        <div className='  w-4/6 rounded-br-[55px]   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  p-1 '>
                            <div className='rounded-br-[55px] grid grid-cols-2 gap-10 items-center justify-between bg-white p-6'>
                                {/* height */}
                                <div>
                                    <p className='text-md font-semibold '>Height</p>
                                    <p className='text-xs font-semibold'>{height}''</p>
                                </div>
                                {/* category  */}
                                <div>
                                    <p className='text-md font-semibold'>Category</p>
                                    <p className='text-xs font-semibold'>seed</p>
                                </div>
                                {/* weight  */}
                                <div>
                                    <p className='text-md font-semibold'>Weight</p>
                                    <p className='text-xs font-semibold'>{pokemonWeight} ibs</p>
                                </div>
                                {/* abilities  */}
                                <div>
                                    <p className='text-md font-semibold'>Abilities</p>

                                    <div className=''>
                                        {pokemonAbilities()}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* part 2 */}
                    <div>
                        <img className='' src={pokemonImage} alt={`${pokemonName} Image`} />
                    </div>
                    {/* part 3 */}
                    <div>
                        {/* Type */}
                        <div>
                            <p className='text-md font-semibold'>Type</p>
                            <div className='mt-2 '>
                                {pokemonTypes()}
                            </div>
                        </div>

                        {/* weakness  */}

                        <div>
                        <p className='text-md font-semibold'>Weakness</p>
                       
                        </div>
                    </div>
                </div>

            </div>


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
