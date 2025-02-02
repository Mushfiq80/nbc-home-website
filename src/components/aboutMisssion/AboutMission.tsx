import { commitments, mission, titles } from "@/lib/Title";
import InfoSection from "./SectionList";

const AboutMission = () => {

    const missionTitle = titles[2];
    const commitmentTitle = titles[3];
    return (
        <div className="container mx-auto px-6 pt-10 lg:px-36">
            <div>
                <InfoSection title={missionTitle.title} highlightTitle={missionTitle.highlightTitle} data={mission}/>
            </div>
            <div>
                <InfoSection title={commitmentTitle.title} highlightTitle={commitmentTitle.highlightTitle} data={commitments}/>
            </div>
        </div>
    );
};

export default AboutMission;