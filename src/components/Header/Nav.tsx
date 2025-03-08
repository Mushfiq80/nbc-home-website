import logo1 from "../../../public/Assets/logo-final 2.png";
import logo2 from "../../../public/Assets/logo-final 1.png";
import { NavLink } from "react-router";

const Nav = () => {

    const links =(
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/Publishers'>Publisher</NavLink>
            </li>
            <li>
                <NavLink to='/Books'>Books</NavLink>
            </li>
            <li>
                <NavLink to='/Authors'>Authors</NavLink>
            </li>
            <li>
                <NavLink to='/company'>NBC Registration</NavLink>
            </li>
        </>
    )
    return (
        <div className="navbar shadow-lg bg-[#F5F7FA]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/" className="flex items-center space-x-2">
                <img className="w-1/4 lg:w-full" src={logo1} alt="" />
                <img className="w-1/2 lg:w-full" src={logo2} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <button className="bg-slate-200 text-green-600 px-2 py-1 md:px-3 md:py-2 rounded-lg">Login</button>
                <button className="bg-green-600 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg">Sign up</button>
            </div>
        </div>
    );
};

export default Nav;
