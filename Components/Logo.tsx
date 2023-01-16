import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex justify-center items-center h-36'>
        <Image src="/Media-Asset/Logo.png" alt="my image" width={200} height={200}/>
        </div>
    );
};

export default Logo;