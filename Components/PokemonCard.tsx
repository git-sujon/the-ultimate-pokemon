
import Link from "next/link";

interface PokeType {
    name: string;
    url: string;
    image: string;
   
    // any other properties your poke object has
  }

const PokemonCard =  ({ poke, idx }: {poke: PokeType, idx: number}) => {
const pokemonID= ('000' + (idx+1)).slice(-3)
    
    const { url,
        name,
        image
    } = poke

    

    return (
        <Link href={`/pokemon/${name}`}  className="">
            {/* card design  */}
            <div className="bg-white hover:bg-blue-700  p-2 rounded-br-[55px] text-gray-700 hover:text-white">
                <div className="bg-gray-200">
                    <p className="text-xs absolute mt-2 ml-2 font-bold text-gray-700">#{pokemonID}</p>
                    <div>
                        <img className="w-36 h-40 mx-auto" src={image} alt={name} />
                    </div>
                </div>
                {/* footer card   */}
             <div className="mt-3 mb-1">
             <div>
                    <p className="text-xs font-bold capitalize  ">{name}</p>
                </div>
                <div className="mt-1 flex gap-x-1">

                    <p className="rounded-sm bg-lime-400 px-2 py-0.5 text-white text-xs mb-0">Grass</p>


                    <p className="rounded-sm bg-fuchsia-400 px-2 py-0.5 text-white text-xs mb-0">Poison</p>

                </div>
             </div>
            </div>
        </Link>
    );
};

export default PokemonCard;



  
  