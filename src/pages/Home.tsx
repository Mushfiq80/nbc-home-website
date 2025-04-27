import Author from "@/components/Author/Author";
import GridView1 from "@/components/GridView1/GridView1";
import GridView2 from "@/components/GridView2/GridView2";
import Hero from "@/components/Header/Hero";
import InfoSubmit from "@/components/InfoSubmit/InfoSubmit";
import Inspiration from "@/components/Inspiration/Inspiration";
import Publishers from "@/components/Publishers/Publishers";
import ShowCase from "@/components/ShowCase.tsx/ShowCase";
import StatInfo from "@/components/StatInfo/StatInfo";


const Home = () => {
    return (
        <div className="layout">
            <Hero></Hero>
            <Publishers></Publishers>
            <ShowCase></ShowCase>
            <GridView1></GridView1>
            <StatInfo></StatInfo>
            <InfoSubmit></InfoSubmit>
            <GridView2></GridView2>
            <Author></Author>
            <Inspiration></Inspiration>
        </div>
    );
};

export default Home;