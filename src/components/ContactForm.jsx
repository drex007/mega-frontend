import React from 'react'
import fadeIn from './Variant'
import { motion } from 'framer-motion'

const ContactForm = () => {
    return (
        <motion.div

            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
        >
            <div className='w-full py-4 px-4 font-neulis' id='contactus'>
                <p className='text-[25px] text-primary-green-black font-semibold'>Contact Us</p>
                <input type="text" name="text" id="" className='p-4 w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Email address' />
                <input type="text" name="text" id="" className='p-4 w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Phonenumber' />
                <input type="number" name="text" id="" className='p-4 w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Location' />
                <textarea name="" id="" rows={5} className='p-4 w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Message'></textarea>
                <button className=" bg-primary-dark-green text-white w-full rounded-lg py-4 justify-center">Submit Form</button>




            </div>

        </motion.div>
    )
}

export default ContactForm
