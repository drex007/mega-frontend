import React from 'react'
import { mobileapp, megsaboutus, welcometo, silo, megacerealsandgrains, corn, wheat, soya, rice, sorgium, cassava, nutseedhuman, nutseed, apple, google } from '../assets'
import { motion } from 'framer-motion'
import fadeIn from './Variant'

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


const AboutUs = () => {

    const contents = [
        {
            "image": corn,
            "title": "Corn",
            "text": "Corn (Dried White and Yellow): Our white and yellow dried corn is ideal for food processing, animal feed, and industrial uses. Carefully dried to preserve its nutrients."
        },
        {
            "image": wheat,
            "title": "Wheat",
            "text": "We provide Grade 1 and Grade 2 wheat according to international standards, ensuring optimal quality for various applications. Flour Mills, Pasta Manufacturers, Animal Feed Producers, Food Processing Companies."
        },
        {
            "image": soya,
            "title": "Soya Beans",
            "text": "Soya Beans: Nutritious and versatile dried soya beans suitable for oil production, animal feed, and human consumption."
        },
        {
            "image": rice,
            "title": "Rice",
            "text": "Rice: Premium-quality rice grains for local and international markets, known for their taste and texture. Long Grain (CP)"
        },
        {
            "image": sorgium,
            "title": "Sorghium",
            "text": "Sorghum, is a versatile cereal grain. Can be White, Red, and Brown. For baking, traditional meals, and breakfast cereals, brewing beer, and non-alcoholic drinks, ingredient in livestock and poultry diets, Biofuel production, and manufacturing of adhesives and paper."
        },

        {
            "image": cassava,
            "title": "Cassava",
            "text": "Cassava (Fresh and Dried): High-quality fresh and dried cassava, perfect for food products like garri, fufu, cassava flour, and bio-chemical products."
        }
    ]
    return (
        <div className=' bg-white  overflow-hidden' id='about'>
            <p className='px-4 py-2 font-neulis font-regular text-primary-text-grey 2xl:text-[50px] lg:text-[30px] text-[15px]  lg:my-0 my-8'>Africa's Farm-To-Market Plaform</p>

            <motion.div


                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }}

            >

                <div className='lg:flex flex-1 items-center -mt-4'>
                    <div className='lg:px-16 px-4  lg:flex-[0.5]'>
                        <p className='font-neulis text-primary-green-black font-regular 2xl:text-[140px] lg:text-[80px] text-[40px] lg:my-0 my-1'>About Us</p>
                        <p className='font-neulis lg:text-[30px] text-[20px] mb-4  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                        <p className='font-neulis text-primary-text-grey lg:text-[20px] text-[15px]'>At Megas Agriculture Limited, we are dedicated to revolutionizing the agro-supply chain in Nigeria and Africa. With over several years of experience, we specialize in connecting producers with markets, offering top-quality agricultural products and raw materials, and ensuring seamless logistics solutions that meet the demands of our partners.</p>

                        <div className='lg:py-12 lg:px-4 lg:flex lg:justify-self-start justify-center mt-4 lg:mt-0 items-center lg:space-x-4'>
                            <p className='font-medium text-[15px] flex justify-center lg:my-0 my-2'>DOWNLOAD THE APP ON </p>
                            <div


                                animate={{
                                    y: ["50%", "-10%"]
                                }}
                                transition={bounceTransition}

                                className='flex space-x-4 justify-center mx-4'>
                                <img src={apple} alt="" className='rounded-lg lg:h-[45px] h-[40px] cursor-pointer' />
                                <img src={google} alt="" className='rounded-lg lg:h-[45px] h-[40px] cursor-pointer' />
                            </div>
                        </div>

                    </div>
                    <div className='hidden  flex-[0.5] lg:flex relative justify-end mr-10 items-center'>
                        <img src={megsaboutus} className='2xl:-mr-[8vw] md:-mr-[10vw] z-10' />
                        <img src={mobileapp} className='z-10' />
                        <div className='absolute 2xl:h-[120%] h-[105%] bg-primary-dark-green w-full rounded-full lg:-mr-[21vw] 2xl:-mr-[32vw]'>

                        </div>

                    </div>

                </div>
            </motion.div>

            {/* Second */}
            <motion.div

                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}

            >
                <div className='flex flex-1 items-center py-8'>
                    <div className='hidden flex-[0.35] lg:flex relative justify-start ml-10 items-center'>
                        <div className='absolute h-[130%] bg-primary-dark-green w-full rounded-full lg:-ml-[18vw] 2xl:-ml-[20vw]'>

                        </div>
                        <img src={welcometo} className='z-10 -ml-20' />

                    </div>
                    <div className='lg:px-16 px-4  lg:flex-[0.65]'>
                        <p className='font-neulis text-primary-green-black font-regular 2xl:text-[140px] lg:text-[80px] text-[40px]'>Welcome To</p>
                        <p className='font-neulis lg:text-[30px] text-[20px] lg:pb-0 pb-4  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                        <p className='font-neulis text-primary-text-grey lg:text-[20px] text-[15px]'>Our robust B2B agro platform, supported by an extensive network of representatives across states, regions, and market localities, provides unmatched reach and efficiency. Whether sourcing raw materials or distributing commodities, our swift and reliable infrastructure guarantees quality, speed, and customer satisfaction. We pride ourselves on our innovative approach, blending traditional market expertise with cutting-edge digital systems. Our upcoming app will further enhance our services, allowing for real-time tracking, efficient distribution, and effortless transactions. At Megas Agriculture Limited, our mission is to empower businesses, drive economic growth, and create lasting partnerships within the agro-industry. We are the trusted bridge between producers and markets, both locally and internationally.</p>



                    </div>


                </div>


            </motion.div>
            {/* Third */}
            <div className='flex flex-1 items-center -mt-4 bg-gradient-to-b from-white to-green-300' id='products'>
                <div className='lg:px-16 px-4 lg:py-0 py-4 lg:flex-[0.5]'>
                    <p className='font-neulis text-primary-light-green font-semibold 2xl:text-[100px] lg:text-[80px] text-[40px]'>Megas</p>
                    <p className='font-neulis lg:text-[30px] text-[20px] mb-4  text-black '>Grains and Cereals</p>

                    <p className='font-neulis text-primary-text-grey lg:text-[20px] text-[14px]'>At Megas Agriculture Limited, we are dedicated to revolutionizing the agro-supply chain in Nigeria and Africa. With over several years of experience, we specialize in connecting producers with markets, offering top-quality agricultural products and raw materials, and ensuring seamless logistics solutions that meet the demands of our partners.</p>
                </div>
                <div className='hidden flex-[0.5] lg:flex relative justify-end mr-10 items-center'>
                    <img src={megacerealsandgrains} className='2xl:-mr-[10vw] md:-mr-[12vw] z-10' />
                    <img src={silo} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[110%] bg-primary-dark-green w-full rounded-full lg:-mr-[25vw] 2xl:-mr-[32vw] z-5'>

                    </div>

                </div>

            </div>
            {/* Fourth */}
            <motion.div

            >
                <div className='grid lg:grid-cols-3 grid-cols-1 items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                    {contents?.map((e, i) => {
                        return <div className='flex flex-col items-center justify-center lg:w-5/6  w-full' key={i}>
                            <img src={e?.image} className='4/5' />
                            <p className='rounded-full bg-primary-light-green px-6 py-2 text-white flex justify-center w-2/5 font-neulis my-2 font-semibold text-[12px]'>{e?.title}</p>
                            <p className='rounded-full  px-8 py-4 text-white flex justify-center w-full font-neulis my-2 text-[12px]'>{e?.text}</p>
                        </div>


                    })}


                </div>
            </motion.div>
            {/* Fifth */}
            <div className='flex flex-1 items-center -mt-4 bg-primary-dark-green'>
                <div className='lg:px-16 p-4  lg:flex-[0.5]'>
                    <p className='font-neulis text-black font-semibold 2xl:text-[100px] lg:text-[80px] text-[40px]'>Megas</p>
                    <p className='font-neulis lg:text-[30px] text-[20px] lg:mb-4  text-black '>Nuts and Seeds</p>

                    <p className='font-neulis text-black '>Explore our variety of nutrient-packed nuts and seeds for food and industrial purpose</p>
                </div>
                <div className='hidden flex-[0.5] lg:flex relative justify-end items-center'>
                    <img src={nutseed} className='2xl:-mr-[8vw] -mr-[10vw]' />
                    <img src={nutseedhuman} className='z-10' />


                </div>

            </div>


        </div>
    )
}

export default AboutUs