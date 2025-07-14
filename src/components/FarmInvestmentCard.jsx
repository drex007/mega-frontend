import React from 'react'

const FarmInvestmentCard = ({ image, text, location, price }) => {
    return (

        <div className='lg:mt-0 mt-4'>
            <img src={image} className='flex justify-center w-full z-10 ' loading='lazy' />
            <div className='bg-primary-green-black rounded-3xl flex flex-col items-center justify-end py-4 -z-10 mx-4 lg:h-[200px] h-[100px] lg:-mt-20 -mt-5'>
                <p className='lg:text-[30px] text-[15px]'>{text}</p>
                <p className='font-fractul lg:text-[20px] text-[12px]'>{location}</p>
                <p className='font-fractul lg:text-[20px] text-[12px]'>{price}</p>

            </div>
        </div>
    )
}

export default FarmInvestmentCard
