import HeroImg1 from "../../../public/Assets/Illustration.png"

const Hero = () => {
    return (
        <div className="container mx-auto px-6 py-6 lg:px-36 lg:py-24">
            <div className=" md:flex justify-between items-center">
                <div className="space-y-4">
                    <h1 className="text-6xl">Welcome to <br /><span className="text-green-600">National Book Center</span></h1>
                    <p className="text-base text-gray-500">&quot;Empowering Minds, Enriching Knowledge&quot;</p>
                    <button className="btn bg-green-600 py-3 px-7 rounded-sm text-white">Learn More</button>
                </div>
                <div>
                    <img src={HeroImg1} alt="Hero-Banner" />
                </div>
                
            </div>
        </div>
    );
};
export default Hero;