import React from "react";
import Logo1 from '../assets/photo1.png'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  
  return (
    <div name="home" className="w-full h-[800px] sm:h-screen bg-pink-100">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col pt-[140px] sm:pt-0 justify-start sm:justify-center h-full ">
        <p className='text-2xl font-bold'>Hi, my name is</p>
        <h1 className='text-4xl mb-4 sm:text-7xl font-bold text-[#DC143C]'>Ritik Bhardwaj</h1>
        <h2 className='text-4xl mb-2 sm:text-4xl font-bold text-gray-500'>A Full-Stack Web Developer.</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>
          A full-stack web-developer with a specialization in MERN
          stack. Excellent teamwork, self-motivated and curious, with a keen
          interest in building user-centric products.{" "}
        </p>
        
        <div className='hidden lg:flex absolute right-[55px]'>
            <img src={Logo1} alt="" style={{width:"300px",borderRadius:"50%"}} />
        </div>
      </div>
      <div className='flex sm:hidden absolute right-[55px] bottom-[120px]'>
            <img src={Logo1} alt="" style={{width:"300px",borderRadius:"50%"}} />
      </div>
    </div>
  );
};

export default Home;
