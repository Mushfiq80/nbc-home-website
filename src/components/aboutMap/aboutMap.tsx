import AboutTitles from "../AboutTitles/AboutTitles";
import { titles } from "@/lib/Title";

const AboutMap = () => {
    const MapTitle = titles;
    return (
        <div className="container mx-auto">
            <div>
                <AboutTitles titles={{ title1: MapTitle[1].title1 ?? '', title2: MapTitle[1].title2 ?? '' }} />
            </div>
            <div>
                <img src="/Assets/Content.png" alt="map" className="w-2/3 mx-auto mt-10" />
            </div>
        </div>
    );
};

export default AboutMap;
