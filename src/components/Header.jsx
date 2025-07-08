import React, { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { logo, textlogo, textlogowhite } from '../assets'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";




const Header = () => {
    const [showMenuBar, setShowMenuBar] = useState(false)

    return (
        <div className='lg:px-8 px-2 py-6 h-[80px] lg:flex  bg-primary-dark-green justify-between'>
            <div className='flex space-x-3 items-center'>
                <img src={logo} className='h-[30px] lg:max-h-10' />
                <img src={textlogowhite} className='h-[30px] lg:max-h-10' />
            </div>
            <div className='hidden lg:flex space-x-8 items-center'>
                <p className='text-white cursor-pointer'>Megas</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>About Us</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Products</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Services</p>
                <p className='text-white cursor-pointer lg:text-[14px]'>Our Team</p>
                <p className='text-white cursor-pointer lg:text-[12px] border border- rounded-sm py-1 px-2'>Contact Us</p>


            </div>

            <div className='relative lg:hidden flex justify-end -mt-8'>
                {!showMenuBar && <HiOutlineMenuAlt2 size={40} color='white' className='cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />}

                {showMenuBar && <div className='absolute z-50 transition ease-in duration-90000 lg:hidden flex-col -mr-10 px-4 py-4 min-h-[450px] w-4/5 shadow-2xl shadow-gray-500 rounded-2xl top-0 bg-primary-dark-green  right-0'>
                    <ImCancelCircle size={30} color='white' className='cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />
                    <div className='items-center text-white font-neulis  text-[20px]'>
                        <p className=' cursor-pointer my-4'>Megas</p>
                        <hr className='text-white'></hr>
                        <p className=' cursor-pointer my-4'>About Us</p>
                        <hr className='text-white'></hr>
                        <p className=' cursor-pointer my-4'>Our Products</p>
                        <hr className='text-white'></hr>
                        <p className=' cursor-pointer my-4'>Our Services</p>
                        <hr className='text-white'></hr>
                        <p className=' cursor-pointer my-4'>Our Team</p>
                        <hr className='text-white'></hr>
                        <p className=' cursor-pointer my-4'>Contact Us</p>


                    </div>

                </div>}
            </div>




        </div>
    )
}

export default Header
