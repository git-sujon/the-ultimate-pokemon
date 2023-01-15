import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import bgImageDesign from './Media-Asset/Background.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>The Ultimate Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* background shape */}
      <div className='h-screen w-[1366px]' style={{ backgroundImage: `url(/Media-Asset/Background.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
        {/* background texture  */}
        <div className='h-screen px-24' style={{ backgroundImage: `url(/Media-Asset/Texture.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
          {/* logo  */}
          <div className='flex justify-center items-center h-44'>
          <Image src="/Media-Asset/Logo.png" alt="my image" width={250} height={250}/>
          </div>
      
          <div>

          </div>
        </div>
      </div>
    </>
  )
}
