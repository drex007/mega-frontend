import React, { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { logo, textlogo, textlogowhite } from '../assets'




const Header = () => {
  
    return (
        <div className='px-8 py-6 h-[80px] lg:flex  bg-primary-dark-green justify-between'>
            <div className='flex space-x-3 items-center'>
                <img src={logo} />
                <img src={textlogowhite} className='max-h-10' />
            </div>
            <div className='hidden lg:flex space-x-8 items-center'>
                <p className='text-white cursor-pointer lg:text-[14px]'>Megas</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>About Us</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Products</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Services</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Team</p>
                <p className='text-white cursor-pointer lg:text-[12px] border border-white rounded-sm py-1 px-2'>Contact Us</p>


            </div>




        </div>
    )
}

export default Header
