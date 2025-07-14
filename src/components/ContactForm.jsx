import React from 'react'
import fadeIn from './Variant'
import { motion } from 'framer-motion'

const ContactForm = () => {
    return (
        <div className='w-full py-4 lg:px-16 px-4 font-fractul mt-32' id='contactus'>
            <p className='lg:text-[25px] text-[15px] text-primary-green-black font-semibold'>Send Us A Message</p>
            <input type="text" name="text" id="" className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Email address' />
            <input type="text" name="text" id="" className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Phonenumber' />
            <input type="number" name="text" id="" className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Location' />
            <textarea name="" id="" rows={5} className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Message'></textarea>
            <button className=" bg-black text-white w-full rounded-lg py-3 justify-center">Submit</button>




        </div>


    )
}

export default ContactForm
