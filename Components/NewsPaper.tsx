import Image from 'next/image';
import React from 'react';

const NewsPaper = () => {
    return (
        <div>

            {/* heading  */}
            <div className='flex justify-center items-start my-10'>
                <h2 className='text-2xl md:text-5xl font-bold text-blue-600 ' style={{ backgroundImage: `url(/Media-Asset/Brush.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    Ash & Pikachu Arrive in<br />Pokemon Universe
                </h2>
            </div>

            {/* contents  */}
            <div className=''>
                {/* text  */}
                <div className='text-justify '>
                    <p >The beloved protagonist of the Pokémon TV series, Ash Ketchum, is finally leaving the show after 25 years of training to be the very best. The news, while nostalgic and bittersweet, isn’t surprising for those who kept up with Ketchum all this time. Ash Ketchum and his adorable partner, Pikachu, have been the cornerstone of the show for more than 1,200 continually airing episodes. The iconic duo have persevered through tough battles, made a conscientious effort to always learn more about each other and the world around them, and brushed off their shoulders after almost comically regular defeat. But this season, the perpetual 10-year-old finally became world champion and has been on a bit of a reunion tour, after decades of losing.  “Ash’s greatest traits are his tenacity and his love for those around him,” said Sarah Natochenny, who has voiced Ash for the English version of the show for 17 years. “So to watch a character for 25 years be this motivated, this dedicated to achieving his goals without making anybody else feel horrible, that’s such a beautiful lesson, especially for young people growing up who are engaging with the show.” During Ash’s 25-year reign, the Pokémon Company churned out dozens of games; more than 20 movies, including Detective Pikachu, featuring Ryan Reynolds; manga; seemingly limitless toys and card games. These ventures don’t all include Ash, but they do embody the sense of adventure and growth he came to be defined by. While Ash has been reaching his goals, the franchise — by some metrics, the most valuable IP in the world — has been evolving, too.</p>

                  
                </div>
                {/* image  */}
                <div className='grid grid-cols-3 space-x-5  md:w-3/6 mx-auto '>
                    {/* first column */}
                    <div className='flex items-center justify-center'>
                        <img className='' src="/Media-Asset/Image04.png" alt="" />
                    </div>
                    {/* second column */}
                    <div className='space-y-5'>
                        <img className='' src="/Media-Asset/Image03.png" alt="" />
                        <img className='' src="/Media-Asset/Image02.png" alt="" />
                    </div>
                    {/* third column */}
                    <div className='space-y-5 mt-20'>
                        <img className='' src="/Media-Asset/Image05.png" alt="" />
                        <img className='' src="/Media-Asset/Image01.png" alt="" />
                    </div>
                </div>

                {/* text  */}
                <div>
                    <p>
                    2022 was a huge year for Pokémon fans. We got two new games, Pokémon Legends: Arceus and Pokémon Scarlet and Violet, that challenged what it meant to exist in the Poké universe. In a typical Pokémon core game, the player picks their starter Pokémon and begins their journey, usually to beat all eight gyms (in a set order) and eventually become the champion of the Pokémon League. Instead, Arceus thrust players into the distant past, when wild Pokémon would have no hesitation to clobber you. You don’t battle gyms — rather, you see a world full of wonder and lore, where Pokémon aren’t necessarily cute friends. While 2019’s Sword and Shield was the first to introduce open-world elements, Scarlet and Violet — which came out in late November — is a cautious evolution of that experimentation. You can battle any gym, giant beast, or Team Star gangster in whichever order — a refreshing spin on the typical Pokémon format.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsPaper;