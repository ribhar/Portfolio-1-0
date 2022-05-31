import React from "react";
import Logo1 from '../assets/photo1.png'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  
  return (
    <div name="home" className="w-full h-screen bg-pink-100">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className='text-2xl font-bold'>Hi, my name is</p>
        <h1 className='text-4xl mb-4 sm:text-7xl font-bold text-[#DC143C]'>Ritik Bhardwaj</h1>
        <h2 className='text-4xl mb-2 sm:text-4xl font-bold text-gray-500'>A Full-Stack Web Developer.</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>
          A full-stack web-developer with a specialization in MERN
          stack. Excellent teamwork, self-motivated and curious, with a keen
          interest in building user-centric products.{" "}
        </p>
        <div>
        {/* <Link to="work" smooth={true} duration={500}> */}
          
          {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-800 hover:border-pink-800'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className="ml-3" />
          </span>
          </button> */}
          {/* </Link> */}
        </div>
      <div className='hidden lg:flex absolute right-[55px]'>
          <img src={Logo1} alt="" style={{width:"300px",borderRadius:"50%"}} />
      </div>
      </div>
    </div>
  );
};

export default Home;
