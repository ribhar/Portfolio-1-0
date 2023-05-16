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
                    <p>Greetings! I'm Ritik, a software engineer, and I'm delighted to extend a warm welcome to all of you visiting my portfolio.</p>
                </div>
                <div>
                    <p className='text-gray-500'>Experienced software developer specializing in backend development with a strong focus on the MERN stack. Equipped with 3 years of industry experience, including database management and server-side development. Currently pursuing an MCA in AI & ML to apply data-driven approaches to software development projects. Committed to delivering high-quality code, following best practices, and collaborating effectively within cross-functional teams. Seeking opportunities to contribute to innovative software solutions and advance professional growth.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
