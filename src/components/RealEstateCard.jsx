import React from 'react'

const RealEstateCard = ({ title, image, text }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg w-full flex flex-col justify-center items-center p-8" >

            <img src={image} className='flex justify-center' loading='lazy' alt='Export agro products'  />
            <p className="text-black font-semibold my-2 font-poppins text-[14px]">{title}</p>
            <p className="text-black flex justify-center text-[14px]">{text}</p>

        </div>
    )
}

export default RealEstateCard
