import React from 'react'

const Contact = () => {
  
  
  return (
    <div name='contact' className="w-full h-[800px] bg-pink-100 text-gray-300 flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/d85f4880-90cb-48bb-afe4-99ffd4fc18a7" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#DC143C] text-gray-900'>Contact</p>
              <p className='text-gray-500 py-4'>Connect with me via email - <b>varribhar@gmail.com</b>, or fill out the contact form below.</p>
          </div>
          <input className=' rounded-lg bg-[#ccd6f6] p-2 text-gray-900' type="text" placeholder='Name' name='name'/>
          <input className='rounded-lg my-4 p-2 bg-[#ccd6f6] text-gray-900' type="email" placeholder='Email' name='email'/>
          <input className='rounded-lg my-4 p-2 bg-[#ccd6f6] text-gray-900' type="tel" placeholder='Phone' name='phone' pattern="[0-9]{5}-[0-9]{5}"/>
          <textarea className='rounded-lg bg-[#ccd6f6] p-2 text-gray-900' name="message" rows="10" placeholder='Message'></textarea>
          <button className='rounded-lg  text-white border-2 bg-[#DC143C] hover:[#DC143C] hover:bg-[#fc5979] hover:shadow-md shadow-gray-400  px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
