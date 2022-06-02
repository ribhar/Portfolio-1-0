import React from "react";
import bath from '../assets/bath.png';
import link from '../assets/linkedin.PNG';
import pharm from '../assets/pharmeasy.png';
import yt from '../assets/youtube.png';
import fm from '../assets/foodmood.PNG';
import {FaGithub,FaEye} from 'react-icons/fa'

const Projects = () => {
  
  return (
    <div name="projects" className="w-full h-[2400px] sm:h-[1500px] md:h-[1100px] bg-[#fff] text-gray-300 ">
      <div className=" sm:max-w-[720px] md:max-w-[1000px] lg:max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-4/5 h-full">
        
          <p className= 'mb-20 text-5xl font-bold w-[185px] border-b-4 border-[#DC143C] text-gray-900'>
            Projects
          </p>
          <div className=' w-full grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-6 '>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={bath} alt="Bath & Body Works image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Bath & Body Works Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.</p>
                  <p className='my-2 text-sm text-lef text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span>React | Tailwind | Rest API </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://bathandbodyworksclone.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/Bath-BodyWorks" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={link} alt="LinkedIn Learning image" />
                <div className="px-3 my-4">
                  <p className=' font-bold  text-left text-gray-600'>LinkedIn Learning Clone</p>
                  <p className='my-2 text-sm text-left  text-gray-500'>LinkedIn Learning provides video courses taught by industry experts in software, creative, and business skills.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span>HTML | CSS | JS | Modules</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://projectlynda.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/LinkedinLearning" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={pharm} alt="PharmEasy image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left  text-gray-600'>PharmEasy Clone</p>
                  <p className='my-2 text-sm text-left  text-gray-500'>PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JS </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://pharmeasyin.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/PharmEasy-clone" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={yt} alt="YouTube image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>YouTube Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>YouTube is an American online video sharing and social media platform. A web application to watch online videos.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JS | Rest API</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://youtube-i.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/Youtube" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={fm} alt="Foody Mood image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Foody Mood</p>
                  <p className='my-2 text-sm text-left  text-gray-500'>Foody Mood is an online recipe book, helps you to become your own favorite cook. 'Foody Mood', your own recipe book.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JS | Rest API</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://foodymood.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/foodyMood" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
