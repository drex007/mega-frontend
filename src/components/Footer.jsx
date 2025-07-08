import React from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'

const Footer = () => {
    return (
        <div className='bg-black text-white font-neulis lg:px-8  px-4 py-4 text-[14px] '>
            <div className='flex space-x-2 items-center my-2'>
                <img src={locationIcon} className='w-[20px]' />
                <p>No. 7 Dadin Kowa Last Gate, Jos, Nigeria</p>
            </div>
            <div className='flex space-x-2 items-center'>
                <img src={messageIcon} className='w-[20px]'/>
                <p>info@megasagricultureltd.com</p>
            </div>
            <div className='flex space-x-2 items-center my-2'>
                <img src={worldIcon} className='w-[20px]' />
                <p>www.megasagriculturallted.com</p>
            </div>

        </div>
    )
}

export default Footer
