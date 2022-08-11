import React from 'react'

const About = () => {
  
  return (
    
    
    <div name='about' className='w-full  h-[600px] sm:h-screen bg-[#fff] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='text-left sm:text-right pb-8 sm:pl-4'>
                <p className='text-5xl font-bold inline border-b-4 border-[#DC143C] text-gray-900'>
                About
                </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-[50px]'>
                <div className='sm:text-right text-4xl font-bold text-gray-500'>
                    <p>Hi, I am Ritik, and I am glad to welcome you all to my profile.</p>
                </div>
                <div>
                    <p className='text-gray-500'>I am passoniate about building excellent software that imporess the lifes of those around me. I specialize in creating software for clients ranging from individuals and small-business all the way to large enterprise corporation. What would you do if you had a software expert available at your fingerpoints.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
