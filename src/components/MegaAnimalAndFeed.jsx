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
    goatchevon
} from '../assets'
import WhyChooseUs from './WhyChooseUs'

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
        <div className='bg-primary-green-black overflow-hidden'>
            <div className='grid lg:grid-cols-3 grid-cols-1 px-auto items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                {contents?.map((e, i) => {
                    return <div className='flex flex-col items-center justify-center w-5/6 ' key={i}>
                        <img src={e?.image} className='4/5' />
                        <p className='rounded-full bg-primary-light-green px-6 py-2 text-white flex justify-center w-2/5 font-neulis my-2 font-semibold lg:text-[12px] text-[10px]'>{e?.title}</p>
                        <p className='rounded-full  px-8 py-4 text-white flex justify-center w-full font-neulis my-2 text-[12px]'>{e?.text}</p>
                    </div>


                })}


            </div>
            <div className='flex flex-1 items-center -mt-4'>
                <div className='lg:px-16 px-4  lg:flex-[0.5]'>
                    <p className='font-neulis text-primary-light-green font-semibold 2xl:text-[100px] lg:text-[80px] text-[40px]'>Megas</p>
                    <p className='font-neulis lg:text-[30px] text-[20px] mb-4  text-primary-light-green '>Animal Feed And Livestock AF-LS</p>

                    <p className='font-neulis text-white lg:text-[20px] text-[14px] '>High quality feed and livestock products tailored to meet divese qgricultural needs.</p>
                </div>
                <div className='hidden flex-[0.5] lg:flex relative justify-end mr-10 items-center w-full'>
                    <img src={cows} className='2xl:-mr-[10vw] md:-mr-[12vw] z-10  -mt-[5vh]' />
                    <img src={chicken} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[110%] bg-primary-dark-green w-full rounded-full lg:-mr-[25vw] 2xl:-mr-[32vw] z-5'>

                    </div>

                </div>

            </div>
            <div className='grid lg:grid-cols-6 grid-cols-2 lg:px-8 px-2 items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                {contents2?.map((e, i) => {
                    return <div className='flex flex-col items-center justify-center w-full ' key={i}>
                        <img src={e?.image} className='w-4/5 lg:w-4/5' />
                        <p className='rounded-full bg-button-dark-green px-2 py-3 text-primary-light-green flex justify-center w-3/5 font-neulis my-2 font-semibold text-[9px]  lg:text-[12px]'>{e?.title}</p>
                        <p className='rounded-full  px-1 py-4 text-white flex justify-center font-neulis my-2 lg:text-[12px] text-[9px] w-full'>{e?.text}</p>
                    </div>


                })}


            </div>
            <WhyChooseUs />
        </div>
    )
}

export default MegaAnimalAndFeed
