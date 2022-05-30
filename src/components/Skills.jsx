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
import TYPESCRIPT from '../assets/typescript.png';
import REDUX from '../assets/redux.png';
import MAT from '../assets/materialui.png';
import { useColorMode} from '@chakra-ui/color-mode';

const Skills = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark';
  return (
    <div name='skills' className='bg-pink-100 text-gray-900 text-sm w-full h-screen px-[80px] py-[20px]'>
    
    <div className='max-w-[1000px]  mx-auto py-4 flex flex-col justify-center w-4/5 h-full'>
        <p className=' mb-20 text-5xl font-bold w-[120px] border-b-4 border-[#DC143C] text-gray-900'>Skills</p>
        <div className=' w-full grid grid-cols-3 place-content-center sm:grid-cols-6 gap-6 text-center'>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={CSS} alt="css icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mt-8 mb-10 h-30 mx-auto my-5'  src={TAILWIND} alt="TailwindCSS icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={MAT} alt="Material UI icon" />
                <p className='my-4'>Material UI</p>
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
                <img className='w-20 mx-auto my-5'  src={GIT} alt="Git icon" />
                <p className='my-4'>Git</p>
            </div>
            <div className='bg-[#fff] font-bold rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto my-5'  src={MONGO} alt="MongoDB icon" />
                <p className='my-4'>MongoDB</p>
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
        </div>
    </div>
    </div>
  )
}

export default Skills
