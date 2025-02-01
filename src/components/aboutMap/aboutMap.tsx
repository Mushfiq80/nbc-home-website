
import AboutTitles from "../AboutTitles/AboutTitles";
import mapImage from "../../../public/Assets/Content.png"
import { titles } from "@/lib/Title";

const AboutMap = () => {

    const title = titles;
    return (
        <div>
            <div>
                <AboutTitles titles={title[1]}></AboutTitles>
            </div>
            <div>
                <img src={mapImage} alt="map" className="w-2/3 mx-auto mt-10" />
            </div>
        </div>
    );
};

export default AboutMap;