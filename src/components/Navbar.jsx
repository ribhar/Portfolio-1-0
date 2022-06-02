import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/MLogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff] text-gray-900">
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "200px"}}
        />
      </div>

      <ul className="flex hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li><a href="https://drive.google.com/file/d/13JNYRxWzKnNcH8b9AxPw8Uaucc0jQY1T/view?usp=sharing" target='_blank'>
            Resume
            </a>
        </li>
        
      </ul> 

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
        <li className="py-6 text-4xl"><a href="https://drive.google.com/file/d/13JNYRxWzKnNcH8b9AxPw8Uaucc0jQY1T/view?usp=sharing" target='_blank'>
            Resume
          </a></li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DC143C]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/ribhar/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/ribhar"
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DC143C]">
            <Link to='contact' smooth={true} duration={500}
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://drive.google.com/file/d/13JNYRxWzKnNcH8b9AxPw8Uaucc0jQY1T/view?usp=sharing"
              target='_blank'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
