import React, { useRef, useState } from 'react'
import fadeIn from './Variant'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [sendingEmail, setSetsendingEmail] = useState(false)

    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSetsendingEmail(!sendingEmail)


        emailjs
            .sendForm(
                "service_srloq94",   // e.g. "service_abcd123"
                "template_t9en7fh",  // e.g. "template_xyz789"
                formRef.current,
                "RGY7HrYOKerm3wrCm"
            )
            .then(
                (result) => {
                    setSetsendingEmail(false)
                    toast("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    setSetsendingEmail(false)
                    toast("Error occured, try again")
                }
            );
    };

    return (
        <div className='w-full py-4 lg:px-16 px-4 font-fractul mt-32' id='contactus'>
            <p className='lg:text-[25px] text-[15px] text-primary-green-black font-semibold'>Send Us A Message</p>
            <form
                ref={formRef}
                onSubmit={sendEmail}
            >
                <input type="text" name="email" id="" required className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Email address' />
                <input type="text" name="phonenumber" required id="" className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Phonenumber' />
                <input type="text" name="address" required id="" className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Address' />
                <textarea name="message" required id="" rows={5} className='p-4 focus:outline-none w-full my-2 border-[1px] text-[12px] rounded-md border-black' placeholder='Message'></textarea>
                {sendingEmail ? <> <button className=" bg-black text-white w-full rounded-lg py-3 justify-center">Sending email</button>

                </> : <button type='submit' className=" bg-black text-white w-full rounded-lg py-3 justify-center">Submit</button>

                }


            </form>

        </div>


    )
}

export default ContactForm
