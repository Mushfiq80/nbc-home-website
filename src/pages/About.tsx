import AboutHero from "@/components/aboutHero/aboutHero";
import AboutMap from "@/components/aboutMap/aboutMap";
import AboutMission from "@/components/aboutMisssion/AboutMission";
import ContactPage from "@/components/ContactPage/ContactPage";

const About = () => {
  return (
    <div className="layout">
      <AboutHero />
      <AboutMap />
      <AboutMission />
      {/* <Officers /> */}
      <ContactPage />
    </div>
  );
};

export default About;
