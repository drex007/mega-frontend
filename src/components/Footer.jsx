import React from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'

const Footer = () => {
    return (
        <div className='bg-black text-white font-fractul'>
            <p className='flex justify-center lg:text-[20px] text-[15px]  pt-4 font-semibold'>Africa's Farm To Market Platform</p>
            <p className='flex justify-center lg:text-[15px] text-[12px] lg:px-0 px-4 py-4 text-center'>At megas agriculture,  we are boosting production and distribution of agricultural commodities using AI, Modern Technology and sustainable farming.</p>
            <div className=' grid lg:grid-cols-4 grid-cols-2 lg:gap-y-0 gap-y-2 lg:gap-x-0 gap-x-16 text-white font-fractul px-4 py-4  lg:text-[14px] text-[10px]'>
                <div>
                    <p className='font-semibold lg:text-[20px] text-[14px]'>Quick Links</p>

                    <p className='my-2'>Our services</p>
                    <p className='my-2'>About Us</p>
                    <p className='my'>Contact Us</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[20px] text-[14px]'>Marketplace</p>

                    <p className='my-2'>Become a vendor</p>
                    <p className='my-2'>Become a buyer</p>
                    <p className='my'>Marketplace</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[20px] text-[14px]'>Explore</p>

                    <p className='my-2'>Our Team</p>
                    <p className='my-2'>Gallery</p>
                    <p className='my'>Careers</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[20px] text-[14px]'>Company</p>

                    <p className='my-2'>Privacy Policy</p>
                    <p className='my-2'>Webmails</p>
                    <p className='my'>FAQ</p>
                </div>

            </div>
            <p className="lg:text-[12px] text-[10px] py-4 flex justify-center">© 2023 Megasagricultureltd</p>
        </div>
    )
}

export default Footer
