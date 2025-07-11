import React from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'

const Footer = () => {
    return (
        <div className='bg-black text-white font-neulis px-4 py-4 lg:text-[14px] text-[10px] '>
            <div className='flex space-x-2 items-center my-2'>
                <img src={locationIcon} className='lg:w-[20px] w-[15px]' />
                <p>No. 7 Dadin Kowa Last Gate, Jos, Nigeria</p>
            </div>
            <div className='flex space-x-2 items-center'>
                <img src={messageIcon} className='lg:w-[20px] w-[15px]'/>
                <p>info@megasagricultureltd.com</p>
            </div>
            <div className='flex space-x-2 items-center my-2'>
                <img src={worldIcon} className='lg:w-[20px] w-[15px]' />
                <p>www.megasagriculturallted.com</p>
            </div>

        </div>
    )
}

export default Footer
