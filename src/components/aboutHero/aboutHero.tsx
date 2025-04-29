import { titles } from "@/lib/Title";

import AboutTitles from "../Titles/AboutTitles";
import HeroDisplay from "./heroDisplay";

const AboutHero: React.FC = () => {
  const heroTitle = titles;

  return (
    <div className="container mx-auto px-6 pt-10 lg:px-36">
      <div>
        <AboutTitles
          titles={{
            title1: heroTitle[0]?.title2 || "",
            title2: [
              "For readers, from Bangladesh",
              "Explore Books, Explore Bangladesh",
              "Unlocking Bangladeshi books to the world",
              "Read books, discover Bangladesh",
            ],
          }}
        />
      </div>
      <div>
        <HeroDisplay />
      </div>
    </div>
  );
};

export default AboutHero;
