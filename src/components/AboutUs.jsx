import React from 'react'
import { mobileapp, megsaboutus, welcometo, silo, megacerealsandgrains, corn, wheat, soya, rice, sorgium, cassava, nutseedhuman, nutseed } from '../assets'

const AboutUs = () => {
    const images = [corn, wheat, soya, rice, sorgium, cassava]
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
        <div className=' bg-white  overflow-hidden' id='about-us'>
            <p className='px-4 py-2 font-neulis font-regular text-primary-text-grey 2xl:text-[50px] text-[30px]'>Africa's Farm-To-Market Plaform</p>

            <div className='flex flex-1 items-center -mt-4'>
                <div className='px-16  flex-[0.5]'>
                    <p className='font-neulis text-primary-green-black font-regular 2xl:text-[140px] text-[80px]'>About Us</p>
                    <p className='font-neulis text-[30px] mb-4  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                    <p className='font-neulis text-primary-text-grey '>At Megas Agriculture Limited, we are dedicated to revolutionizing the agro-supply chain in Nigeria and Africa. With over several years of experience, we specialize in connecting producers with markets, offering top-quality agricultural products and raw materials, and ensuring seamless logistics solutions that meet the demands of our partners.</p>

                    <div className='py-12 px-16'>
                        <p className='font-medium'>DOWNLOAD THE APP ON </p>
                    </div>

                </div>
                <div className='flex-[0.5] flex relative justify-end mr-10 items-center'>
                    <img src={megsaboutus} className='2xl:-mr-[8vw] md:-mr-[10vw] z-10' />
                    <img src={mobileapp} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[105%] bg-primary-dark-green w-full rounded-full lg:-mr-[21vw] 2xl:-mr-[32vw]'>

                    </div>

                </div>

            </div>

            {/* Second */}
            <div className='flex flex-1 items-center py-8'>
                <div className='flex-[0.35] flex relative justify-start ml-10 items-center'>
                    <div className='absolute h-[130%] bg-primary-dark-green w-full rounded-full lg:-ml-[18vw] 2xl:-ml-[20vw]'>

                    </div>
                    <img src={welcometo} className='z-10 -ml-20' />

                </div>
                <div className='px-16  flex-[0.65]'>
                    <p className='font-neulis text-primary-green-black font-regular 2xl:text-[140px] text-[80px]'>Welcome To</p>
                    <p className='font-neulis text-[30px]  text-primary-text-grey '><span className='font-semibold'>Megas</span> Agriculture Limited</p>

                    <p className='font-neulis text-primary-text-grey'>Our robust B2B agro platform, supported by an extensive network of representatives across states, regions, and market localities, provides unmatched reach and efficiency. Whether sourcing raw materials or distributing commodities, our swift and reliable infrastructure guarantees quality, speed, and customer satisfaction. We pride ourselves on our innovative approach, blending traditional market expertise with cutting-edge digital systems. Our upcoming app will further enhance our services, allowing for real-time tracking, efficient distribution, and effortless transactions. At Megas Agriculture Limited, our mission is to empower businesses, drive economic growth, and create lasting partnerships within the agro-industry. We are the trusted bridge between producers and markets, both locally and internationally.</p>



                </div>


            </div>
            {/* Third */}
            <div className='flex flex-1 items-center -mt-4 bg-gradient-to-b from-white to-green-300'>
                <div className='px-16  flex-[0.5]'>
                    <p className='font-neulis text-primary-light-green font-semibold 2xl:text-[100px] text-[80px]'>Megas</p>
                    <p className='font-neulis text-[30px] mb-4  text-black '>Grains and Cereals</p>

                    <p className='font-neulis text-primary-text-grey '>At Megas Agriculture Limited, we are dedicated to revolutionizing the agro-supply chain in Nigeria and Africa. With over several years of experience, we specialize in connecting producers with markets, offering top-quality agricultural products and raw materials, and ensuring seamless logistics solutions that meet the demands of our partners.</p>
                </div>
                <div className='flex-[0.5] flex relative justify-end mr-10 items-center'>
                    <img src={megacerealsandgrains} className='2xl:-mr-[10vw] md:-mr-[12vw] z-10' />
                    <img src={silo} className='z-10' />
                    <div className='absolute 2xl:h-[120%] h-[110%] bg-primary-dark-green w-full rounded-full lg:-mr-[25vw] 2xl:-mr-[32vw] z-5'>

                    </div>

                </div>

            </div>
            {/* Fourth */}
            <div className='grid grid-cols-3 px-auto items-stretch justify-items-center gap-y-6 bg-primary-green-black py-16 -z-5'>
                {contents?.map((e, i) => {
                    return <div className='flex flex-col items-center justify-center w-5/6 '>
                        <img src={e?.image} className='4/5' />
                        <p className='rounded-full bg-primary-light-green px-6 py-2 text-white flex justify-center w-2/5 font-neulis my-2 font-semibold text-[12px]'>{e?.title}</p>
                        <p className='rounded-full  px-8 py-4 text-white flex justify-center w-full font-neulis my-2 text-[12px]'>{e?.text}</p>
                    </div>


                })}


            </div>
            {/* Fifth */}
            <div className='flex flex-1 items-center -mt-4 bg-primary-dark-green'>
                <div className='px-16  flex-[0.5]'>
                    <p className='font-neulis text-black font-semibold 2xl:text-[100px] text-[80px]'>Megas</p>
                    <p className='font-neulis text-[30px] mb-4  text-black '>Nuts and Seeds</p>

                    <p className='font-neulis text-black '>Explore our variety of nutrient-packed nuts and seeds for food and industrial purpose</p>
                </div>
                <div className='flex-[0.5] flex relative justify-end items-center'>
                    <img src={nutseed} className='2xl:-mr-[8vw] -mr-[10vw]' />
                    <img src={nutseedhuman} className='z-10' />


                </div>

            </div>


        </div>
    )
}

export default AboutUs