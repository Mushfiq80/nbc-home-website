import AboutHero from "@/components/aboutHero/aboutHero";
import AboutMap from "@/components/aboutMap/aboutMap";
import AboutMission from "@/components/aboutMisssion/AboutMission";
import ContactPage from "@/components/ContactPage/ContactPage";
import Officers from "@/components/Officers/Officers";



const About = () => {
    return (
        <div className="">
            <AboutHero />
            <AboutMap />
            <AboutMission />
            <Officers />
            <ContactPage />
        </div>
    );
};

export default About;