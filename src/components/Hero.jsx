import React, { useContext, useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { ship } from '../assets'

const bounceTransition = {
    y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const xbounceTransition = {
    x: {
        duration: 7,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const zbounceTransition = {
    y: {
        duration: 10,
        repeat: Infinity,
        ease: "easeOut",
    }



}





const Hero = () => {
    const slideIndex = [0, 1, 2, 3]
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div id='swap' className=' w-[100%]  h-[400px] absolute'>
            <div className=' w-[50%] h-[400px]' >
                <img src={ship} className=' relative w-[100%]' />
                <div className='relative space-x-6 flex justify-center items-center top-64'>
                    <button className='rounded-full bg-yellow-300 p-4 w-[140px] text-[12px] font-neulis-semibold'>Send Quota</button>
                    <button className='rounded-full bg-white p-4 w-[140px] text-[12px] font-neulis-semibold'>Read Reviews</button>

                </div>
                <div className='relative space-x-6 flex  justify-start items-center top-72 px-8'>
                    <p className='text-[70px] font-neulis text-white '>Export With <span className='text-primary-light-green font-semibold'>Megas</span></p>
                </div>

                <div className='relative flex justify-center top-80 space-x-4' >
                    {slideIndex?.map((e, i) => <div
                        className={`${e == 0 ? "bg-white" : "bg-gray-400"}  rounded-xl h-[5px] w-[40px] cursor-pointer`}
                    >


                    </div>)}
                </div>
            </div>


            {/* 
                    <div
                        animate={{
                            y: ["20%", "-10%"]
                        }}
                        transition={zbounceTransition}

                        className='absolute  lg:ml-[15%] ml-[75%] -mt-[6%] -z-40 lg:-mt-[4%] 2xl:-mt-[4%] 3xl:ml-[10%] 3xl:-mt-[2.5%] lg:h-[70px] lg:w-[70px] w-[50px] h-[50px] rounded-full bg-gradient-radial to-slate-800 from-white shadow-lg mb-4 shadow-slate-600 from-[2%] to-[98%] animate-ping'>

                    </div> */}


        </div>
    )
}

export default Hero
