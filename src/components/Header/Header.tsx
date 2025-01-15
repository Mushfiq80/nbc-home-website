import Hero from "./Hero";
import Nav from "./Nav";


const Header = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <Nav></Nav>
            <Hero></Hero>
        </div>
    );
};

export default Header;