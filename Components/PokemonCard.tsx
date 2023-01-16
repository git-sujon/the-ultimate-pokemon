import Image from "next/image";

const PokemonCard = ({ poke}) => {








    
    
    const { url,
        name,
        image
    } = poke
    return (
        <div className="">
            {/* card design  */}
            <div className="bg-white hover:bg-blue-700  p-2 rounded-br-[65px] text-gray-700 hover:text-white">
                <div className="bg-gray-200">
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
        </div>
    );
};

export default PokemonCard;



  
  