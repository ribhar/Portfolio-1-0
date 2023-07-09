import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  
  
  return (
    <div name='contact' className="w-full h-[800px] bg-pink-100 text-gray-300 flex justify-center items-center p-4">
      <div method="POST" action="https://getform.io/f/d85f4880-90cb-48bb-afe4-99ffd4fc18a7" className='flex flex-col max-w-[600px] w-full '>
          <div className='pb-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#DC143C] text-gray-900 '>Contact</p>
              <p className='text-gray-500 mt-[50px] pb-4'>Connect me via email - <b>ribharscode@gmail.com</b>, or ping me on options below.</p>
              <div className='flex flex-row gap-[10px]'>
                <a href="https://www.linkedin.com/in/ribhar/" target='_blank'> <button className=' p-2 rounded-full text-white bg-[#DC143C] hover:bg-[#fc5979] hover:shadow-md shadow-gray-400'><FaLinkedin size={20}/></button></a>
                <a href="https://github.com/ribhar" target='_blank'> <button className=' p-2 rounded-full text-white bg-[#DC143C] hover:bg-[#fc5979] hover:shadow-md shadow-gray-400'><FaGithub size={20}/></button></a>
              </div>
          </div>
          <form  method="POST" action="https://getform.io/f/d85f4880-90cb-48bb-afe4-99ffd4fc18a7" className='flex flex-col max-w-[600px] w-full'>
            <input className=' rounded-lg bg-[#ccd6f6] p-2 text-gray-900' type="text" placeholder='Name' name='name'/>
            <input className='rounded-lg my-4 p-2 bg-[#ccd6f6] text-gray-900' type="email" placeholder='Email' name='email'/>
            <input className='rounded-lg mb-4 p-2 bg-[#ccd6f6] text-gray-900' type="tel" placeholder='Phone' name='phone'/>
            <textarea className='rounded-lg bg-[#ccd6f6] p-2 text-gray-900' name="message" rows="10" placeholder='Message'></textarea>
            <button className='rounded-lg  text-white border-2 bg-[#DC143C] hover:bg-[#fc5979] hover:shadow-md shadow-gray-400  px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
