import icon1 from "../../../public/Assets/Icon1.png";
import icon2 from "../../../public/Assets/Icon2.png";
import icon3 from "../../../public/Assets/Icon3.png";

const ShowCase = () => {
    return (
        <div className="text-center mx-auto lg:mx-36  pb-10">
            <div className="space-y-5">
                <h1 className="text-4xl font-semibold">Manage and Showcase Books Across <br />Bangladesh in a Single Platform</h1>
                <p>Who Is the National Book Center Suitable For?</p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
                    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="text-center">
                            <img src={icon1} alt="" />
                        </div>
                        <h1 className="text-2xl font-semibold mt-5">Publishers and <br />Authors</h1>
                        <p className="text-gray-500 text-sm">Our platform allows publishers and <br />authors to upload detailed information about their books, making it easily reaching to readers nationwide</p>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="text-center">
                            <img src={icon2} alt="" />
                        </div>
                        <h1 className="text-2xl font-semibold mt-5">Book Enthusiasts <br />and Researchers</h1>
                        <p className="text-gray-500 text-sm">Discover a wide array of books <br />published each year, complete with detailed statistics on total publications and genres. </p>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="text-center">
                            <img src={icon3} alt="" />
                        </div>
                        <h1 className="text-2xl font-semibold mt-5">Educational <br />Organizations</h1>
                        <p className="text-gray-500 text-sm">Access a centralized hub showcasing the literary contributions of Bangladesh, <br />fostering cultural and academic growth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;