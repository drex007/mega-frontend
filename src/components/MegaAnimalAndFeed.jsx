import React, { useState, useContext } from 'react'
import {
    cashew, chicken, cows, ginger, sesame, maizeoffals,
    ricebran,
    wheatbran,
    cassavabran,
    soyabeansmeal,
    bonemeal,
    palmkernelcake,
    palmkernelfibre,
    palmkernelshell,
    whitechiken,
    cowbeef,
    goatchevon,
    livestockbg,
    cows1,
    chicken1
} from '../assets'
import WhyChooseUs from './WhyChooseUs'
import { motion } from 'framer-motion'
import fadeIn from './Variant'

const MegaAnimalAndFeed = () => {
    const contents = [
        {
            "image": cashew,
            "title": "Cashew Nuts",
            "text": "Carefully processed to retain value. Ideal industrial uses. Cashew Nut Shell Liquid (CNSL), Oil, Animal Feed, Biofuel."
        },
        {
            "image": sesame,
            "title": "Sesame",
            "text": "Available in hulled and unlulled varieties. High oil content and purity ensured through stringent sorting processes."
        },
        {
            "image": ginger,
            "title": "Ginger",
            "text": "Fresh and dried ginger roots of Grade A quality, high in aroma and flavor, suitable for spice markets."
        },

    ]


    const contents2 = [

        {
            "image": maizeoffals,
            "title": "Maize Offal",
            "text": "Fine milling by-products with high-energy content. Clean and dust-free."
        },
        {
            "image": ricebran,
            "title": "Rice Bran",
            "text": "Stabilized rice bran with minimal fat content, suitable for livestock diets."
        },
        {
            "image": wheatbran,
            "title": "Wheat Bran",
            "text": "Wheat Bran: Coarse and fine bran options with high fiber and nutrient value."
        },
        {
            "image": cassavabran,
            "title": "Cassava Flour",
            "text": "Cassava Flour: Fine-milled cassava flour, acarbohydrate-rich alternative feed ingredient."
        },
        {
            "image": soyabeansmeal,
            "title": "Soyabean Meal",
            "text": "Soya Beans Meal: High-protein content meal, essential for poultry and fish feed."
        },
        {
            "image": bonemeal,
            "title": "Bone Meal",
            "text": "Bone Meal: Crushed and sterilized bone meal with high calcium and phosphorus levels.."
        },

        {
            "image": palmkernelfibre,
            "title": "Palmkernel fibre",
            "text": "Palm Kernel Fiber: Roughage-rich material for ruminant feeding."
        },
        {
            "image": palmkernelcake,
            "title": "Palmkernel Cake",
            "text": "PKC (Palm Kernel Cake): Protein-rich feed ingredient derived from kernel extraction."
        },
        {
            "image": palmkernelshell,
            "title": "Palmkernel Shell",
            "text": "Palm Kernel Shell: Crushed shells for supplemental feed or energy uses."
        },
        {
            "image": whitechiken,
            "title": "Chicken",
            "text": "Chicken: Healthy, farm-raised poultry with strict biosecurity measures."
        },
        {
            "image": cowbeef,
            "title": "Cow & Beef",
            "text": "Cow/Beef: Grass-fed cows providing tender and flavorful beef."
        },
        {
            "image": goatchevon,
            "title": "Wheat Bran",
            "text": "Goat/Chevon: Free-range goats offeringpremium-quality meat."
        },



    ]


    return (
        <div className='bg-primary-green-black overflow-hidden lg:pt-0 pt-8'>
            <motion.div

                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
            >
                <div className='grid grid-cols-3 px-4 justify-items-center lg:gap-y-6 bg-primary-green-black lg:py-16 -z-5'>
                    {contents?.map((e, i) => {
                        return <div className='flex flex-col items-center justify-center w-full lg:px-0 px-1 ' key={i}>
                            <img src={e?.image} className='lg:w-4/5 w-full' />
                            <p className='rounded-full bg-primary-dark-green px-6 lg:py-1 py-1 text-white flex justify-center lg:w-2/5 font-neulis mt-8 lg:text-[15px] text-[5px]'>{e?.title}</p>
                            <p className='rounded-full  lg:px-8 lg:py-4 text-white flex justify-center w-full font-fractul my-2 lg:text-[13px] lg:w-4/5  text-[6px] text-center'>{e?.text}</p>
                        </div>


                    })}


                </div>
                <div className='flex flex-1 items-center lg:-mt-4 mt-8'>
                    <div className='lg:px-16 px-4  lg:flex-[0.6]'>
                        <p className='font-neulis text-primary-light-green font-semibold 2xl:text-[100px] lg:text-[80px] text-[40px]'>Megas</p>
                        <p className='lg:hidden font-neulis lg:text-[48px]  text-[20px] mb-4  text-primary-dark-green lg:w-4/6 w-full font-extralight'>Animal Feed And Livestock<br></br> AF-LS</p>
                        <p className='hidden lg:flex font-neulis lg:text-[48px]  text-[20px] mb-4  text-primary-dark-green lg:w-4/6 w-full font-extralight'>Animal Feed And  <br></br>Livestock AF-LS</p>

                        <p className='font-fractul text-white lg:text-[13px] text-[12px] lg:w-3/5 w-full'>High quality feed and livestock products tailored to meet diverse agricultural needs.</p>
                    </div>
                    <div className='hidden flex-[0.4] lg:flex relative justify-end mr-10 items-center w-full'>
                        <img src={cows1} className='2xl:-mr-[10vw] md:-mr-[12vw] z-10  -mt-[5vh] rounded-2xl' />
                        <img src={chicken} className='z-10' />
                        <div className='absolute 2xl:h-[120%] h-[120%] -mt-10 bg-primary-light-green w-full rounded-full lg:-mr-[20vw] 2xl:-mr-[32vw]'>

                        </div>

                    </div>

                </div>
                {/* SmallScreen */}
                <div className='w-[100vw] lg:hidden flex flex-1 h-[50vh] mt-4 justify-center overflow-hidden items-center'>
                    <img src={cows1} className='h-[45vh] rounded-[40px] z-10 -mr-[10vw]' />
                    <img src={chicken1} className='h-[45vh] -z-5' />
                </div>
                <div className='grid lg:grid-cols-6 grid-cols-2 lg:px-8 px-2 items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 z-50'>
                    {contents2?.map((e, i) => {
                        return <div className='flex flex-col items-center justify-center w-full ' key={i}>
                            <img src={e?.image} className='w-4/5 lg:w-4/5' />
                            <p className='rounded-full bg-button-dark-green px-2 py-2 text-primary-light-green flex justify-center w-3/5 font-neulis my-2 text-[9px]  lg:text-[11px]'>{e?.title}</p>
                            <p className='rounded-full  px-1 py-4 text-white flex justify-center font-fractul my-2 lg:text-[12px] text-[9px] lg:w-full w-4/5 text-center '>{e?.text}</p>
                        </div>


                    })}


                </div>
            </motion.div>
            <WhyChooseUs />
        </div>
    )
}

export default MegaAnimalAndFeed
