import React from 'react'
import email from '../assets/icons/email.png';
import location from '../assets/icons/location.png';
import phone from '../assets/icons/phone.png';
import upquote from '../assets/icons/upquote.png';
import downquote from '../assets/icons/downquote.png';


const Footer = () => {
  return (
    <div id="footer" className='bg-red-400 p-5 '>
       <h1 className='text-center text-3xl font-semibold text-white pb-7 border-b-2 border-[#2B283A] '>About Us</h1>
       
       <div className='flex flex-col justify-between mt-4 sm:flex-row gap-4 ' >

            <div className='ml-4 flex gap-5 flex-col items-start w-50% '>
              <a className='cursor-pointer flex flex-row justify-center items-center gap-2 ' href="mailto:alluri7700@gmail.com">
                <img src={email} className='w-14 h-14' alt="email" />
                <h2 className='text-white'>Email</h2>
              </a>
              <a className='cursor-pointer flex flex-row justify-center items-center gap-2 ' href="https://www.google.com/maps/search/jn+colony+markapur+location+as+a+link/@15.745682,79.2677969,16z/data=!3m1!4b1?entry=ttu">
                <img src={location} className='w-14 h-14' alt="location" />
                <h2 className='text-white'>JN.colony, Markapur, 523316, Prakasam district, Andhra Pradesh, India</h2>
              </a>
              <a className='cursor-pointer flex flex-row justify-center items-center gap-2 ' href="9949****78">
                <img src={phone} className='w-14 h-14' alt="phone" />
                <h2 className='text-white'>Phone</h2>
              </a>
            </div>

            <div className='mr-4 w-1/2 gap-4 ' >
                <div className='flex flex-row gap-1 '>
                  <img src={upquote} alt="upquote" className='h-5 w-5 ' />
                  <h1 className='text-gray-800 text-2xl font-semibold tracking-wide'> Hi I am Alluri, a student and a web developer </h1>
                  <img src={downquote} alt="downquote" className='h-5 w-5' />
                </div>
                
                
                <p className='text-white text-lg tracking-wide mt-4 ' >
                'What sets me apart as a full-stack web developer is my unwavering passion for continuous learning, coupled with an enthusiastic embrace of new tools and technologies. This drive fuels my ability to deliver innovative and impactful solutions, making me a standout in the field. Trust me to bring a unique blend of expertise, adaptability, and forward-thinking to your web development projects.''
                </p>
            </div>

       </div>
    </div>
  )
}

export default Footer