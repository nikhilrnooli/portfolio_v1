import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-10" src={logo} alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/nikhil-nooli/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            <a href="https://github.com/nikhil-nooli" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
            </a>
            <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
            </a>
            <a href="https://twitter.com/nikhil_nooli" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
            </a>
            </div>
        </nav>
    );
};

export default Navbar;
