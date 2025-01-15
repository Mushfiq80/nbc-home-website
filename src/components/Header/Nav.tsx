import logo1 from "../../../public/Assets/logo-final 2.png";
import logo2 from "../../../public/Assets/logo-final 1.png";

const Nav = () => {
    return (
        <div className="flex justify-between items-center px-10 py-5">
            <div className="flex gap-1 h-9 ">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
            <div>
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Publishers</li>
                    <li>Books</li>
                    <li>Authors</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="flex gap-2">
                <button className="bg-slate-100 text-green-600 px-4 py-2 rounded-lg">Login</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Sign up</button>
            </div>
        </div>
    );
};

export default Nav;