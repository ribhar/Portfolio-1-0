import React from 'react'

const About = () => {
  
  return (
    
    
    <div name='about' className='w-full  h-[750px] sm:h-screen bg-[#fff] text-gray-300'>
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
                    <p>Greetings! I'm Ritik, a software engineer, welcoming you to my portfolio.</p>
                </div>
                <div>
                    <p className='text-gray-500'>Experienced software development engineer with a strong background in full-stack web development, 2160+ hours of hands-on experience, and 2+ year of professional experience. Pursuing MCA in Artificial Intelligence and Machine Learning. Skilled in developing robust web applications, collaborating effectively, and staying updated with emerging technologies. Seeking challenging opportunities to contribute to impactful projects and exceed client expectations.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
