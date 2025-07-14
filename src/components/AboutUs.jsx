import React from 'react'
import { mobileapp, megsaboutus, welcometo, silo, megacerealsandgrains, corn, wheat, soya, rice, sorgium, cassava, nutseedhuman, nutseed, apple, google, background, peoplecomplete, cerealsbg, cerealaboutus } from '../assets'
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
            "text": "We provide Grade 1 and Grade 2 wheat according to international standards, ensuring optimal quality for various applications."
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
            "text": "Sorghum, is a versatile cereal grain. Can be White, Red, and Brown. For baking, traditional meals, and breakfast cereals, brewing beer, and non-alcoholic drinks."
        },

        {
            "image": cassava,
            "title": "Cassava",
            "text": "Cassava (Fresh and Dried): High-quality fresh and dried cassava, perfect for food products like garri, fufu, cassava flour, and bio-chemical products."
        }
    ]
    return (
        <div className=' bg-white  overflow-hidden' id='about'>
            <p className='flex lg:justify-start justify-center lg:px-4 py-2 font-neulis font-regular text-primary-text-grey 2xl:text-[50px] lg:text-[30px] text-[12px]  lg:my-0 my-1'>Africa's Farm-To-Market Plaform</p>
            <img src={cerealaboutus} alt="Cereals for agro export" className='lg:hidden w-full flex justify-center mx-auto px-4 ml-2' />

            <motion.div


                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.4 }}

            >

                <div className='lg:flex flex-1 items-center -mt-h4'>
                    <div className='lg:px-16   lg:flex-[0.5]'>

                        <p className='flex lg:justify-start justify-center font-neulis text-primary-green-black font-regular 2xl:text-[100px] lg:text-[96px] text-[40px] lg:my-0 my-1 py-0'>About us</p>
                        <p className='hidden lg:flex font-neulis lg:text-[25px] text-[15px] mb-4  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                        <p className='font-fractul font-light text-gray-700 lg:text-[13px] text-[12px] lg:text-left text-center lg:px-0 px-4'>At Megas Agriculture Limited, we are dedicated to revolutionizing the agro-supply chain in Nigeria and Africa. With over several years of experience, we specialize in connecting producers with markets, offering top-quality agricultural products and raw materials, and ensuring seamless logistics solutions that meet the demands of our partners.</p>
                        <div className='lg:hidden flex relative w-full items-center '>
                            <div className="bg-primary-light-green left-1/2 -translate-x-1/2 h-[45vh] absolute w-[110vw]  mx-auto  rounded-full overflow-hidden -z-5"></div>
                            <img src={mobileapp} className='flex justify-center mx-auto lg:hidden w-4/5 z-10 ' />
                        </div>
                        <div className='lg:py-12 lg:px-4 lg:flex lg:justify-self-start justify-center mt-0 lg:mt-0 items-center lg:space-x-4'>
                            <p className='font-medium text-[13px] flex justify-center lg:my-0 my-2'>DOWNLOAD THE APP ON </p>
                            <div



                                className='flex space-x-4 justify-center mx-4'>
                                <img src={apple} alt="" className='rounded-lg lg:h-[45px] h-[40px] cursor-pointer' />
                                <img src={google} alt="" className='rounded-lg lg:h-[45px] h-[40px] cursor-pointer' />
                            </div>
                        </div>

                    </div>

                    <div className='hidden  flex-[0.5] lg:flex relative justify-end mr-10 items-center'>
                        <img src={megsaboutus} className='2xl:-mr-[8vw] md:-mr-[10vw] z-10' />
                        <img src={mobileapp} className='z-10' />
                        <div className='absolute 2xl:h-[120%] h-[105%] bg-primary-light-green w-full rounded-full lg:-mr-[21vw] 2xl:-mr-[32vw]'>

                        </div>

                    </div>

                </div>
            </motion.div>
            <div className='w-[140vw] bg-cover  bg-no-repeat relative lg:hidden left-1/2 -translate-x-1/2 lg:-ml-10 flex h-[40vh] mt-16 justify-center overflow-hidden' style={{ backgroundImage: `url(${peoplecomplete})` }}>

            </div>
            {/* Second */}
            <motion.div

                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}

            >
                <div className='flex flex-1 items-center py-8'>
                    <div className='hidden flex-[0.5] lg:flex relative justify-start ml-10 items-center'>
                        <div className='absolute h-[120%] bg-primary-light-green w-full rounded-full lg:-ml-[25vw] 2xl:-ml-[35vw]'>

                        </div>
                        <img src={welcometo} className='z-10 -ml-20' />

                    </div>
                    <div className='lg:px-8 px-4  lg:flex-[0.5]'>
                        <p className='flex justify-center lg:justify-start  font-neulis text-primary-green-black font-regular 2xl:text-[100px] lg:text-[79px] text-[40px]'>Welcome To</p>
                        <p className='flex justify-center lg:justify-start  font-neulis lg:text-[24px] text-[20px] lg:pb-0 pb-4  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                        <p className='font-fractul lg:text-left text-center lg:px-0 px-4 text-primary-text-grey lg:text-[13px] text-[12px]'>Our robust B2B agro platform, supported by an extensive network of representatives across states, regions, and market localities, provides unmatched reach and efficiency. Whether sourcing raw materials or distributing commodities, our swift and reliable infrastructure guarantees quality, speed, and customer satisfaction.<br></br><span className='flex mt-4'>We pride ourselves on our innovative approach, blending traditional market expertise with cutting-edge digital systems. Our upcoming app will further enhance our services, allowing for real-time tracking, efficient distribution, and effortless transactions. At Megas Agriculture Limited, our mission is to empower businesses, drive economic growth, and create lasting partnerships within the agro-industry. We are the trusted bridge between producers and markets, both locally and internationally</span></p>



                    </div>


                </div>


            </motion.div>


            {/* Third */}
            <div className='w-[140vw] relative lg:hidden left-1/2 -translate-x-1/3 bg-cover -ml-10 flex h-[40vh] mt-4 justify-center overflow-hidden bg-no-repeat' style={{ backgroundImage: `url(${cerealsbg})` }}>

            </div>
            <div className='lg:flex lg:flex-1 grid lg:py-0 py-8 items-center -mt-4 bg-gradient-to-b lg:from-white from-green-100 lg:to-green-300 to-green-100' id='products'>
                <div className='lg:px-16 px-4 lg:py-0 py-4 lg:flex-[0.5]'>
                    <p className='flex lg:justify-start justify-center font-neulis text-primary-dark-green font-semibold 2xl:text-[100px] lg:text-[79px] text-[40px]'>Megas</p>
                    <p className='flex lg:justify-start justify-center font-neulis lg:text-[48px] text-[20px] mb-4  text-primary-green-black '>Grains and Cereals</p>

                    <p className='flex lg:text-start text-center font-fractul text-primary-text-grey lg:text-[13px] text-[12px]'>Our premium grains and cereals are sourced from trusted farms, ensuring quality and freshness to demand standard.</p>
                </div>

                <div className='hidden flex-[0.5] lg:flex relative justify-end mr-10 items-center'>
                    <img src={megacerealsandgrains} className='2xl:-mr-[10vw] md:-mr-[20vw] z-10' />
                    <img src={silo} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[110%] bg-primary-light-green w-full rounded-full lg:-mr-[25vw] 2xl:-mr-[32vw] z-5'>

                    </div>

                </div>

            </div>
            {/* Fourth */}
            <motion.div

            >
                <div className='grid lg:grid-cols-3 grid-cols-2 items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5' style={{ backgroundImage: `url(${background})` }}>
                    {contents?.map((e, i) => {
                        return <div className='flex flex-col items-center justify-center lg:w-5/6  lg:px-0 px-4 w-full' key={i}>
                            <img src={e?.image} className='w-full' />
                            <p className='rounded-full bg-primary-dark-green px-6 py-2 text-white flex justify-center lg:w-2/5 w-4/5 font-neulis my-2 lg:text-[15px] text-[8px]'>{e?.title}</p>
                            <p className='rounded-full  lg:px-8 py-4 text-white flex justify-center w-full font-fractul my-2 lg:text-[13px] text-[10px] text-center'>{e?.text}</p>
                        </div>


                    })}


                </div>
            </motion.div>
            {/* Fifth */}
            <div
                className='hidden lg:flex flex-1 items-center bg-gradient-to-b from-primary-text-dark-green from-[5%]   to-[#00FF60] to-[90%] bg-blend-overlay bg-cover bg-center'
                style={{
                    backgroundImage: `linear-gradient(to bottom, #0A662F, #00FF60), url(${background})`,
                }}
            >

                <div className='lg:px-16 p-4  lg:flex-[0.5]'>
                    <p className='font-neulis text-black font-semibold 2xl:text-[100px] lg:text-[79px] text-[40px]'>Megas</p>
                    <p className='font-neulis lg:text-[48px] text-[20px] lg:mb-2  text-black '>Nuts and Seeds</p>

                    <p className='font-fractul text-black lg:w-4/5 w-full lg:text-[16px] text-[12px]'>Explore our variety of nutrient-packed nuts and seeds for food and industrial purpose.</p>
                </div>
                <div className='lg:flex-[0.5] flex lg:relative justify-end items-center'>
                    <img src={nutseed} className='2xl:-mr-[8vw] lg:-mr-[10vw]' />
                    <img src={nutseedhuman} className='z-10' />


                </div>


            </div>
            {/*Fifth for a small screen */}
            <div
                className='lg:hidden flex flex-col  items-center bg-gradient-to-b from-primary-text-dark-green from-[5%]   to-[#00FF60] to-[90%] bg-cover bg-center'

            >
                <div className='relative w-full flex items-center pt-8 pl-[5vw]'>
                    <img src={nutseed} className='absolute w-3/6' />
                    <img src={nutseedhuman} className='w-4/6 z-10 ml-[30vw]' />

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-neulis text-primary-text-dark-green font-semibold text-[69px] z-50'>Megas</p>
                    <p className='font-neulis  text-[25px]  text-black '>Nuts and Seeds</p>

                    <p className='font-fractul text-black text-center px-8 pb-8 w-full text-[12px]'>Explore our variety of nutrient-packed nuts and seeds for food and industrial purpose.</p>
                </div>


            </div>

        </div>
    )
}

export default AboutUs