
import { titles } from "@/lib/Title";
import AboutTitles from "../AboutTitles/AboutTitles";
import HeroDisplay from "./heroDisplay";

const AboutHero = () => {

    const title = titles;

    return (
        <div className="container mx-auto px-6 pt-10 lg:px-36">
            <div className="">
                <AboutTitles titles={title[0]} />
            </div>
            <div>
                <HeroDisplay />
            </div>
        </div>
    );
};

export default AboutHero;