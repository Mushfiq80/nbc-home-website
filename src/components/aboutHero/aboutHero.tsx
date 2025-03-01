import { titles } from "@/lib/Title";

import HeroDisplay from "./heroDisplay";
import AboutTitles from "../Titles/AboutTitles";

const AboutHero = () => {
    const heroTitle = titles;

    return (
        <div className="container mx-auto px-6 pt-10 lg:px-36">
            <div>
                <AboutTitles titles={{ title1: heroTitle[0]?.title1 || "", title2: heroTitle[0]?.title2 || "" }} />
            </div>
            <div>
                <HeroDisplay />
            </div>
        </div>
    );
};

export default AboutHero;
