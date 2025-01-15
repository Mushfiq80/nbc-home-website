import logo1 from "../../../public/Assets/Logo1.png";
import logo2 from "../../../public/Assets/Logo2.png";
import logo3 from "../../../public/Assets/Logo3.png";
import logo4 from "../../../public/Assets/Logo4.png";
import logo5 from "../../../public/Assets/Logo5.png";
import logo6 from "../../../public/Assets/Logo6.png";
import logo7 from "../../../public/Assets/Logo7.png";

const Publishers = () => {
    return (
        <div className=" text-center container mx-auto pb-10">
            <h1 className="text-4xl font-semibold">Our publishers</h1>
            <p className="text-base text-gray-600">We have been working with some Fortune 2500+ Publisher</p>
            <div>
                <div className="relative flex overflow-x-hidden md:mx-10 lg:mx-20">
                    <div className="flex gap-32 py-12 animate-marquee whitespace-nowrap">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                        <img className=" lg:mr-28" src={logo7} alt="" />

                    </div>

                    <div className="absolute flex gap-32 top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <img className="" src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                        <img className="lg:mr-28" src={logo7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publishers;