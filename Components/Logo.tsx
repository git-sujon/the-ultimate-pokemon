import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex justify-center items-center h-44'>
        <Image src="/Media-Asset/Logo.png" alt="my image" width={250} height={250}/>
        </div>
    );
};

export default Logo;