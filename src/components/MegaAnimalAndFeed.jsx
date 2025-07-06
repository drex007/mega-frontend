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
            "text": "Carefully processed to retain value. Ideal industrial uses. Cashew Nut Shell Liquid (CNSL), Oil, Animal Feed, Biofuel."
        },
        {
            "image": ricebran,
            "title": "Rice Bran",
            "text": "Available in hulled and unlulled varieties. High oil content and purity ensured through stringent sorting processes."
        },
        {
            "image": wheatbran,
            "title": "Wheat Bran",
            "text": "Fresh and dried ginger roots of Grade A quality, high in aroma and flavor, suitable for spice markets."
        },
        {
            "image": cassavabran,
            "title": "Maize Offal",
            "text": "Carefully processed to retain value. Ideal industrial uses. Cashew Nut Shell Liquid (CNSL), Oil, Animal Feed, Biofuel."
        },
        {
            "image": soyabeansmeal,
            "title": "Rice Bran",
            "text": "Available in hulled and unlulled varieties. High oil content and purity ensured through stringent sorting processes."
        },
        {
            "image": bonemeal,
            "title": "Wheat Bran",
            "text": "Fresh and dried ginger roots of Grade A quality, high in aroma and flavor, suitable for spice markets."
        },

        {
            "image": palmkernelfibre,
            "title": "Maize Offal",
            "text": "Carefully processed to retain value. Ideal industrial uses. Cashew Nut Shell Liquid (CNSL), Oil, Animal Feed, Biofuel."
        },
        {
            "image": palmkernelcake,
            "title": "Rice Bran",
            "text": "Available in hulled and unlulled varieties. High oil content and purity ensured through stringent sorting processes."
        },
        {
            "image": palmkernelshell,
            "title": "Wheat Bran",
            "text": "Fresh and dried ginger roots of Grade A quality, high in aroma and flavor, suitable for spice markets."
        },
        {
            "image": whitechiken,
            "title": "Maize Offal",
            "text": "Carefully processed to retain value. Ideal industrial uses. Cashew Nut Shell Liquid (CNSL), Oil, Animal Feed, Biofuel."
        },
        {
            "image": cowbeef,
            "title": "Rice Bran",
            "text": "Available in hulled and unlulled varieties. High oil content and purity ensured through stringent sorting processes."
        },
        {
            "image": goatchevon,
            "title": "Wheat Bran",
            "text": "Fresh and dried ginger roots of Grade A quality, high in aroma and flavor, suitable for spice markets."
        },



    ]


    return (
        <div className='bg-primary-green-black overflow-hidden'>
            <div className='grid grid-cols-3 px-auto items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                {contents?.map((e, i) => {
                    return <div className='flex flex-col items-center justify-center w-5/6 '>
                        <img src={e?.image} className='4/5' />
                        <p className='rounded-full bg-primary-light-green px-6 py-2 text-white flex justify-center w-2/5 font-neulis my-2 font-semibold text-[12px]'>{e?.title}</p>
                        <p className='rounded-full  px-8 py-4 text-white flex justify-center w-full font-neulis my-2 text-[12px]'>{e?.text}</p>
                    </div>


                })}


            </div>
            <div className='flex flex-1 items-center -mt-4'>
                <div className='px-16  flex-[0.5]'>
                    <p className='font-neulis text-primary-light-green font-semibold 2xl:text-[100px] text-[80px]'>Megas</p>
                    <p className='font-neulis text-[30px] mb-4  text-primary-light-green '>Animal Feed And Livestock AF-LS</p>

                    <p className='font-neulis text-white '>High quality feed and livestock products tailored to meet divese qgricultural needs.</p>
                </div>
                <div className='flex-[0.5] flex relative justify-end mr-10 items-center w-full'>
                    <img src={cows} className='2xl:-mr-[10vw] md:-mr-[12vw] z-10  -mt-[5vh]' />
                    <img src={chicken} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[110%] bg-primary-dark-green w-full rounded-full lg:-mr-[25vw] 2xl:-mr-[32vw] z-5'>

                    </div>

                </div>

            </div>
            <div className='grid grid-cols-6 px-8 items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                {contents2?.map((e, i) => {
                    return <div className='flex flex-col items-center justify-center w-full '>
                        <img src={e?.image} className='w-2/5 lg:w-3/4' />
                        <p className='rounded-full bg-button-dark-green px-2 py-3 text-primary-light-green flex justify-center w-2/5 font-neulis my-2 font-semibold md:text-[10px]  text-[14px]'>{e?.title}</p>
                        <p className='rounded-full  px-8 py-4 text-white flex justify-center w-full font-neulis my-2 text-[12px]'>{e?.text}</p>
                    </div>


                })}


            </div>
            <WhyChooseUs />
        </div>
    )
}

export default MegaAnimalAndFeed
