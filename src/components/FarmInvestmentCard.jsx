import React from 'react'

const FarmInvestmentCard = ({ image, text, location, price }) => {
    return (

        <div className='lg:mt-0 mt-4'>
            <img src={image} className='flex justify-center w-full z-10 ' loading='lazy'/>
            <div className='bg-primary-green-black rounded-3xl flex flex-col items-center justify-end py-4 -z-10 mx-4 h-[200px] -mt-20'>
                <p className='text-[30px]'>{text}</p>
                <p className='font-fractul'>{location}</p>
                <p className='font-fractul'>{price}</p>

            </div>
        </div>
    )
}

export default FarmInvestmentCard
