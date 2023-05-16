import React from "react";
import Logo1 from '../assets/photo1.png'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  
  return (
    //lg:mx-[40px] w-full h-full max-w-[1100px] flex flex-col lg:flex-row pt-[140px] justify-start lg:justify-around  
    <div name="home" className="w-full h-[850px] sm:h-[850px] lg:h-[600px] bg-pink-100 mx-auto">
      <div className="px-[20px] flex flex-col sm:flex-col md:flex-col lg:flex-row pt-[130px] md:pt-[150px] lg:justify-center">
        <div>
          <p className='text-2xl font-bold'>Hi, my name is</p>
          <h1 className='text-6xl md:text-7xl font-bold text-[#DC143C]'>Ritik Bhardwaj</h1>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-500'>Software Development Engineer</h2>
          <p className='text-gray-500 py-4 md:max-w-[750px] lg:max-w-[700px]'>
          
Experienced software developer industry tech, adept in database management and server-side development. Committed to delivering high-quality code and seeking opportunities to contribute to innovative software solutions.
          </p>
        </div>
        
        
        <div className='mt-[40px] lg:mt-0'>
            <img src={Logo1} alt="" className="w-[300px] rounde-100"  />
        </div>
      </div>
      {/* <div className='flex lg:hidden absolute right-[55px] bottom-[-50px]'>
            <img src={Logo1} alt="" style={{width:"300px",borderRadius:"50%"}} />
      </div> */}
    </div>
  );
};

export default Home;
