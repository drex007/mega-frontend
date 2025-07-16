import React from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'

const Footer = () => {
    return (
        <div className='bg-black text-white font-fractul'>
            <p className='flex justify-center lg:text-[20px] text-[15px]  pt-4 font-semibold'>Africa's Farm To Market Platform</p>
            <div className='flex justify-start  space-x-2 w-full px-4 my-2 items-center '>
                <img src={messageIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[12px]'>info@megasagriculture.com</p>
            </div>

            <div className='flex justify-start  space-x-2 w-full px-4 '>
                <img src={worldIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[12px] items-center'>www.megasagricultureltd.com</p>
            </div>
            <div className='flex justify-start  space-x-2 w-full px-4 my-2 items-center  '>
                <img src={locationIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[12px]'>No. 7 Dadin Kowa Last Gate Jos,Plateau State Nigeria</p>
            </div>

            <p className='flex justify-center lg:text-[15px] text-[12px] lg:px-0 px-4 py-4 text-center'>At megas agriculture,  we are boosting production and distribution of agricultural commodities using AI, Modern Technology and sustainable farming.</p>
            <div className=' grid lg:grid-cols-4 grid-cols-2 lg:gap-y-0 gap-y-2 lg:gap-x-0 gap-x-32 text-white font-fractul px-4 py-4  lg:text-[14px] text-[10px]'>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Quick Links</p>

                    <p className='my-2 cursor-pointer'>Our services</p>
                    <p className='my-2 cursor-pointer'>About Us</p>
                    <p className='my-2 cursor-pointer'>Contact Us</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Marketplace</p>

                    <p className='my-2 cursor-pointer'>Become a vendor</p>
                    <p className='my-2 cursor-pointer'>Become a buyer</p>
                    <p className='my-2 cursor-pointer'>Marketplace</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Explore</p>

                    <p className='my-2 cursor-pointer'>Our Team</p>
                    <p className='my-2 cursor-pointer'>Gallery</p>
                    <p className='my-2 cursor-pointer'>Careers</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Company</p>

                    <p className='my-2 cursor-pointer'>Privacy Policy</p>
                    <p className='my-2 cursor-pointer'>Webmails</p>
                    <p className='my-2 cursor-pointer'>FAQ</p>
                </div>

            </div>
            <p className="lg:text-[12px] text-[10px] py-4 flex justify-center">© 2023 Megasagricultureltd</p>
        </div>
    )
}

export default Footer
