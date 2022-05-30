import React from "react";
import bath from '../assets/bath.png';
import link from '../assets/linkedin.PNG';
import pharm from '../assets/pharmeasy.png';
import yt from '../assets/youtube.png';
import fm from '../assets/foodmood.PNG';
import {Flex, Icon} from '@chakra-ui/react'
import {IconButton,Button} from '@chakra-ui/button'
import {FaGithub,FaEye} from 'react-icons/fa'
import { useColorMode} from '@chakra-ui/color-mode';

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark';
  return (
    <div name="projects" className="w-full md:h-[1100px] bg-[#fff] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-4/5 h-full">
        
          <p className= 'mb-20 text-5xl font-bold w-[185px] border-b-4 border-[#DC143C] text-gray-900'>
            Projects
          </p>
          <div className=' w-full grid grid-cols-3 place-content-center sm:grid-cols-3 gap-6 '>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={bath} alt="Bath & Body Works image" />
                <p className='mt-4  font-bold  text-left mx-3 text-gray-600'>Bath & Body Works Clone</p>
                <p className='my-2 text-sm text-left mx-3 text-gray-500'>Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.</p>
                <p className='my-2 text-sm text-left ml-3 mr-2  font-bold text-[#DC143C] inline'>Tech Stack:</p> <p className='my-2 text-sm text-left  text-gray-500 inline'>React | Tailwind | Rest API | NPM </p>
                <div className=" flex flex-row px-3 py-8  justify-between w-full text-gray-500">
                  <a href="https://bathandbodyworksclone.netlify.app/" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">live<FaEye className="mt-1"/></button></a>
                  <a href="https://github.com/ribhar/Bath-BodyWorks" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">Repo<FaGithub className="mt-1"/></button></a>
                </div>
                
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={link} alt="LinkedIn Learning image" />
                <p className='mt-4  font-bold  text-left mx-3 text-gray-600'>LinkedIn Learning Clone</p>
                <p className='my-2 text-sm text-left mx-3 text-gray-500'>LinkedIn Learning provides video courses taught by industry experts in software, creative, and business skills.</p>
                <p className='my-2 text-sm text-left ml-3 mr-2 font-bold text-[#DC143C] inline'>Tech Stack:</p> <p className='my-2 text-sm text-left  text-gray-500 inline'>HTML | CSS | JS | Modules </p>
                <div className=" flex flex-row px-3 py-8 justify-between w-full text-gray-500">
                  <a href="https://projectlynda.netlify.app/" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">live<FaEye className="mt-1"/></button></a>
                  <a href="https://github.com/ribhar/LinkedinLearning" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">Repo<FaGithub className="mt-1"/></button></a>
                </div>
                
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={pharm} alt="PharmEasy image" />
                <p className='mt-4  font-bold  text-left mx-3 text-gray-600'>PharmEasy Clone</p>
                <p className='my-2 text-sm text-left mx-3 text-gray-500'>PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products.</p>
                <p className='my-2 text-sm text-left ml-3 mr-2 font-bold text-[#DC143C] inline'>Tech Stack:</p> <p className='my-2 text-sm text-left  text-gray-500 inline'> HTML | CSS | JS </p>
                <div className=" flex flex-row px-3 py-8 justify-between w-full text-gray-500">
                  <a href="https://pharmeasyin.netlify.app/" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">live<FaEye className="mt-1"/></button></a>
                  <a href="https://github.com/ribhar/PharmEasy-clone" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">Repo<FaGithub className="mt-1"/></button></a>
                </div>
                
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={yt} alt="YouTube image" />
                <p className='mt-4  font-bold  text-left mx-3 text-gray-600'>YouTube Clone</p>
                <p className='my-2 text-sm text-left mx-3 text-gray-500'>YouTube is an American online video sharing and social media platform. A web application to watch online videos.</p>
                <p className='my-2 text-sm text-left ml-3 mr-2 font-bold text-[#DC143C] inline'>Tech Stack:</p> <p className='my-2 text-sm text-left  text-gray-500 inline'> HTML | CSS | JS | Rest API </p>
                <div className=" flex flex-row px-3 py-8 justify-between w-full text-gray-500">
                  <a href="https://youtube-i.netlify.app/" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">live<FaEye className="mt-1"/></button></a>
                  <a href="https://github.com/ribhar/Youtube" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">Repo<FaGithub className="mt-1"/></button></a>
                </div>
                
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={fm} alt="Foody Mood image" />
                <p className='mt-4  font-bold  text-left mx-3 text-gray-600'>Foody Mood</p>
                <p className='my-2 text-sm text-left mx-3 text-gray-500'>Foody Mood is an online recipe book, helps you to become your own favorite cook. 'Foody Mood', your own recipe book.</p>
                <p className='my-2 text-sm text-left ml-3 mr-2 font-bold text-[#DC143C] inline'>Tech Stack:</p> <p className='my-2 text-sm text-left  text-gray-500 inline'> HTML | CSS | JS | Rest API </p>
                <div className=" flex flex-row px-3 py-8 justify-between w-full text-gray-500">
                  <a href="https://foodymood.netlify.app/" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">live<FaEye className="mt-1"/></button></a>
                  <a href="https://github.com/ribhar/foodyMood" target="_blank"><button className="flex flex-row justify-around w-[100px] text-white  text-lg hover:bg-[#fc5979]  rounded-xl bg-[#DC143C] ">Repo<FaGithub className="mt-1"/></button></a>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
