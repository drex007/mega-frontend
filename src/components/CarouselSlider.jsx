import React, { useState } from 'react'
import { ship, youngman, youngwoman, familyfarming, arrowback, arrowfront } from '../assets'


const CarouselSlider = () => {
    // slides = [0, 1, 2, 3]
    const images = [ship,youngman,  familyfarming,youngwoman,]
    const slideIndex = [0, 1, 2, 3]
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className='overflow-hidden md:h-[50vh] lg:h-[120vh] 2xl:h-[90vh] w-full m-auto relative '>

            <div className='flex transition-transform duration-500 w-full'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images?.map((e, i) => {
                    return <img src={e} key={i} className='w-full h-full object-cover flex-shrink-0' />
                })}

            </div>

            <div className='absolute -top-[15%] h-full w-full flex justify-between px-8 items-center z-20 '>
                <img src={arrowback} className='hover:cursor-pointer w-[20px] lg:w-[50px]' onClick={prevSlide} />
                <img src={arrowfront} className='hover:cursor-pointer w-[20px] lg:w-[50px]' onClick={nextSlide} />

            </div>


            <div className='absolute space-x-6 top-[10%] h-full flex justify-center items-center w-full'>
                <button className='rounded-full bg-yellow-300 p-4 2xl:w-[200px] 2xl:py-6 w-[140px] text-[12px] font-neulis-semibold'>Send Quota</button>
                <button className='rounded-full bg-white p-4 w-[140px] 2xl:w-[200px] 2xl:py-6 text-[12px] font-neulis-semibold' onClick={() => console.log("hiiiii")}>Read Reviews</button>

            </div>
            {currentIndex == 0 && <div className='absolute top-[75%] space-x-6 flex h-full  justify-start  px-8 w-full'>
                <p className='2xl:text-[100px] lg:text-[60px] text-[20px] font-neulis text-white '>Export With <span className='text-primary-light-green font-semibold'>Megas</span></p>
            </div>}
            {currentIndex == 1 && <div className='absolute top-[65%] space-x-6 flex h-full  justify-start  px-8 w-full'>
                <p className='2xl:text-[100px] lg:text-[60px] text-[20px] font-neulis text-white '>Looking To Invest ? <br></br> Invest Smart With <span className='text-primary-light-green font-semibold'>Megas</span></p>
            </div>}
            {currentIndex == 2 && <div className='absolute top-[65%] space-x-6 flex h-full  justify-start  px-8 w-full'>
                <p className='2xl:text-[100px] lg:text-[60px] text-[20px] font-neulis text-white '>New To The Industry ? <br></br><span className='text-primary-light-green font-semibold'>Megas</span> Is Here To Guide You </p>
            </div>}
            {currentIndex == 3 && <div className='absolute top-[65%] space-x-6 flex h-full  justify-start  px-8 w-full'>
                <p className='2xl:text-[100px] lg:text-[60px] text-[20px] font-neulis text-white '>In The Diaspora ?<br></br>  <span className='text-primary-dark-green font-semibold'>Megas</span> Let You Buy And Sell</p>
            </div>}
            <div className='absolute flex justify-center top-[90%] space-x-4 w-full' >
                {slideIndex?.map((e, i) => <div key={i}
                    className={`${i == currentIndex ? "bg-white" : "bg-gray-400"}  rounded-xl h-[5px] w-[40px] cursor-pointer`}
                    onClick={() => setCurrentIndex(i)}
                >

                </div>)}
            </div>



        </div>
    )
}

export default CarouselSlider
