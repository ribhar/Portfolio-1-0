import React from "react";
import sc from '../assets/sugarcosmetics.PNG';
import bath from '../assets/bath.png';
import kim from '../assets/kim.PNG';
import link from '../assets/linkedin.PNG';
import pharm from '../assets/pharmeasy.png';
import yt from '../assets/youtube.png';
import fm from '../assets/foodmood.PNG';
import ri from '../assets/land.png';
import sl from '../assets/streamline.PNG';
import {FaGithub,FaEye} from 'react-icons/fa'

const Projects = () => {
  
  return (
    <div name="projects" className="w-full h-[4650px] sm:h-[2300px] md:h-[1500px] bg-[#fff] text-gray-300 px-[20px]">
      <div className=" mx-auto place-content-center sm:max-w-[720px] md:max-w-[1000px] lg:max-w-[1250px] p-4 flex flex-col lg:justify-center w-5/5 h-full">
        
          <p className= 'mb-20 text-5xl font-bold w-[185px] border-b-4 border-[#DC143C] text-gray-900'>
            Projects
          </p>
          <div className=' w-full grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-6 '>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={sl} alt="Sugar Cosmetics image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Streamline</p>
                  <p className='my-2 text-sm text-left text-gray-500'>Streamline chat application where proffestionals can chat and assign tasks all in the real time.</p>
                  <p className='my-2 text-sm text-lef text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> MongoDB | Express.js | React | Node.js </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://streamline-eight.vercel.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/Streamline" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={sc} alt="Sugar Cosmetics image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Sugar Cosmetics Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance.</p>
                  <p className='my-2 text-sm text-lef text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> MongoDB | Express.js | React | Node.js </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://sugar-cosmetics.vercel.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/SugarCosmetics" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={kim} alt="kimaye image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Kimaye Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>Kimaye. Brand. Growers of India's finest fruits, we want to make eating fruits delightful experience for you.</p>
                  <p className='my-2 text-sm text-lef text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> MongoDB | Express.js | React | Node.js </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://mykimaye.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/kimaye" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className=' bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={bath} alt="Bath & Body Works image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>Bath & Body Works Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>Bath & Body Works, LLC. which sells soaps, lotions, fragrances, and candles. In 1997, it was the largest bath shop chain in the United States.</p>
                  <p className='my-2 text-sm text-lef text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span>React | Tailwind | Rest API | Node.js</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://bathandbodyworksclone.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/BathBodyWorks" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={link} alt="LinkedIn Learning image" />
                <div className="px-3 my-4">
                  <p className=' font-bold  text-left text-gray-600'>LinkedIn Learning Clone</p>
                  <p className='my-2 text-sm text-left  text-gray-500'>LinkedIn Learning is an American online learning provider. It provides video courses taught by industry experts in software, creative, and business skills.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span>HTML | CSS | JavaScript | Node.js</p>
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
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JavaScript </p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://pharmeasyin.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/PharmEasy" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={yt} alt="YouTube image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>YouTube Clone</p>
                  <p className='my-2 text-sm text-left text-gray-500'>YouTube is an American online video sharing and social media platform. A web application to watch online videos.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JavaScript | Rest API</p>
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
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JavaScript | Rest API</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://foodymood.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/FoodyMood" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
            <div className='bg-pink-100 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className=' rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto'  src={ri} alt="RiCinemo image" />
                <div className="px-3 my-4">
                  <p className='font-bold  text-left text-gray-600'>RiCinemo</p>
                  <p className='my-2 text-sm text-left  text-gray-500'>Ricinemo is a movie explorer website, where one can get most info on their favorite movies and the trending movie.</p>
                  <p className='my-2 text-sm text-left   text-gray-500 inline'><span className=' text-sm text-left  mr-2 font-bold text-[#DC143C] '>Tech Stack:</span> HTML | CSS | JS | Rest API</p>
                  <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                    <a href="https://ricinemo.netlify.app/" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Live</span><FaEye className="mt-[6px] mb-[6px] "/></button></a>
                    <a href="https://github.com/ribhar/RiCinemo" target="_blank"><button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#fc5979] rounded-xl bg-[#DC143C] "><span className="text-white text-lg ">Repo</span><FaGithub className="mt-[6px] mb-[6px] "/></button></a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
