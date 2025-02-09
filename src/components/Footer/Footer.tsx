

import { Link } from 'react-router';
import logo from '../../../public/Assets/footerLogo.png'

const Footer = () => {
    
    return (
        <footer className="footer bg-gray-800 text-white p-10">
            <aside>
                <img src={logo} alt="" />
                <p>
                    Copyright © 2024 National Book Center
                    <br />
                    All rights reserved
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">NBC</h6>
                <Link to='/' className="link link-hover">About Us</Link>
                <Link to='/' className="link link-hover">Books</Link>
                <Link to='/' className="link link-hover">Publisher</Link>
                <Link to='/' className="link link-hover">Authors</Link>
                <Link to='/' className="link link-hover">Contact Us</Link>
            

            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to='/' className="link link-hover">Help Center</Link>
                <Link to='/' className="link link-hover">Terms of service</Link>
                <Link to='/' className="link link-hover">Legal</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Status</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Stay up to date</h6>
                <input className='bg-gray-500 rounded-lg p-1' placeholder='Your email address' type="text" />
            </nav>
        </footer>
    );
};

export default Footer;