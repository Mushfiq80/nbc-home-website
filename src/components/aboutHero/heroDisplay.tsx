import Image from '../../../public/Assets/Rectangle.png'

const HeroDisplay = () => {
    return (
        <div>
            <div className="text-center mt-5 md:mt-10">
                <h1 className="bg-gradient-to-b from-green-600 to-green-400 px-10 pt-5 pb-28 rounded-2xl text-gray-100 text-xl md:text-2xl lg:text-3xl">We are dedicated to connecting publishers, authors, and readers nationwide. We empower publishers to showcase their works, provide readers access to diverse books, and celebrate the country’s literary heritage.</h1>
            </div>
            <div className='-mt-28'>
                <img src={Image} alt="" />
            </div>

        </div>
    );
};

export default HeroDisplay;