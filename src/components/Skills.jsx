import React from 'react'
import REACT from '../assets/react.png';
import CSS from '../assets/css.png';
import GIT from '../assets/git.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import TS from '../assets/typescript.png';
import MONGO from '../assets/mongo.png';
import EX from '../assets/express.png';
import NODE from '../assets/node.png';
import TAILWIND from '../assets/tailwind.png';
import REDUX from '../assets/redux.png';
import MAT from '../assets/materialui.png';
import FIRE from '../assets/firebase.png';
import BOOT from '../assets/bootstrap.png';
import CY from '../assets/cypress.svg';
import JEST from '../assets/jest.svg';
import PY from '../assets/python.png';
import MG from '../assets/mongoose.png';

const Skills = () => {
    
  return (
    <div name='skills' className='bg-pink-100 text-gray-900 text-sm w-full h-[1300px] sm:h-[1100px] md:h-[800px] px-[20px] sm:px-[40px] md:px-[60px] py-[20px]'>
    
    <div className='max-w-[1200px]  sm:mx-auto py-4 flex flex-col justify-center w-5/5 sm:w-4/5 h-full'>
        <p className=' mb-20 text-5xl font-bold w-[120px] border-b-4 border-[#DC143C] text-gray-900'>Skills</p>
        <div className=' w-full grid grid-cols-3 place-content-center sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-4 md:gap-6 text-center'>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={CSS} alt="css icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={JS} alt="JavaScript icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={TS} alt="TypeScript icon" />
                <p className='my-4'>TypeScript</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={PY} alt="Node.js icon" />
                <p className='my-4'>Python</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={GIT} alt="Git icon" />
                <p className='my-4'>Git</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={MONGO} alt="MongoDB icon" />
                <p className='my-4'>MongoDB</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-[45px] mb-[42px] my-5'  src={MG} alt="Node.js icon" />
                <p className='my-4'>Mongoose</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mt-8 mb-10 h-30 mx-auto my-5'  src={EX} alt="Express.js icon" />
                <p className='my-4'>Express.js</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={REACT} alt="React icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={REDUX} alt="Redux icon" />
                <p className='my-4'>Redux</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={NODE} alt="Node.js icon" />
                <p className='my-4'>Node.js</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={CY} alt="Node.js icon" />
                <p className='my-4'>Cypress</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={JEST} alt="Node.js icon" />
                <p className='my-4'>Jest</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={FIRE} alt="Node.js icon" />
                <p className='my-4'>Firebase</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={BOOT} alt="Node.js icon" />
                <p className='my-4'>Bootstrap</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mt-8 mb-10 h-30 mx-auto my-5'  src={TAILWIND} alt="TailwindCSS icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={MAT} alt="Material UI icon" />
                <p className='my-4'>Material UI</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills
