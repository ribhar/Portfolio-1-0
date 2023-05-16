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
                    <p className='text-gray-500'>
I am a skilled software developer with 2.8 years of experience specializing in the MERN stack. I have a strong command over MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval. My proficiency extends to Node.js and Express for server-side development, as well as React and Redux for building interactive and responsive user interfaces.

In addition to my expertise in the MERN stack, I am well-versed in TypeScript, JavaScript, Python, and C++, enabling me to develop robust and scalable applications across various platforms. I have a solid understanding of CI/CD practices and utilize Git and GitHub for efficient version control and collaborative development.

As a continuous learner, I am currently pursuing an MCA in AI & ML to enhance my knowledge in artificial intelligence and machine learning. This academic pursuit enables me to bring a data-driven approach and innovative problem-solving techniques to my software development projects.

With a strong foundation in the MERN stack, proficiency in multiple programming languages, and a passion for leveraging AI and ML technologies, I am confident in my ability to contribute to cutting-edge software solutions. I am driven by a desire to deliver high-quality code, adhere to best practices, and collaborate effectively with cross-functional teams.

I am eager to bring my skills, experience, and enthusiasm to a dynamic organization that values innovation and fosters professional growth.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
