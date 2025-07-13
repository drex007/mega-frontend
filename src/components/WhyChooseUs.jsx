import React from 'react'
import { w1, w2, w3, w4 } from '../assets'


const WhyChooseUs = () => {
    const images = [w1, w2, w3, w4]
    return (
        <div className='bg-white  rounded-t-[50px] lg:rounded-t-[100px] px-4 lg:px-16 ' id='chooseus'>
            <p className='flex justify-center font-neulis lg:text-[70px] text-[30px] font-extralight py-8 text-primary-text-grey'>WHY CHOOSE US ?</p>
            <div className=' grid grid-cols-4 lg:gap-4 gap-2  justify-evenly'>
                {images?.map((e, i) => {
                    return <div className='flex items-center ' key={i}>
                        <img src={e} className='w-full' />
                    </div>


                })}
            </div>
            <div className='font-fractul py-8 lg:text-[16px] text-[12px]'>
                <p className='my-2'><span className='font-semibold my-2'>Adherence to Quality Standards: </span>At Megas Agriculture, we prioritize delivering products of the highest quality. Our commodities are carefully sourced, processed, and graded to meet international standards, ensuring consistency and excellence. <br></br></p>
                <p className='my-2'><span className='font-semibold my-2'>Sustainable Farming Practices</span>: We are committed to promoting environmental stewardship through sustainable farming methods. By partnering with eco-conscious farmers and implementing responsible agricultural practices, we help preserve natural resources for future generations.<br></br> </p>
                <p className='my-2'><span className='font-semibold my-2'>Customer-Focused Service:</span> Our customers are at the heart of everything we do. From personalized service to timely delivery, we strive to meet and exceed customer expectations, fostering lasting partnerships built on trust and reliability.</p>
                <p className='my-2'><span className='font-semibold my-2'>Extensive Network and Speed:</span>Megas Agriculture boasts a robust and expansive supply network, enabling us to source and deliver products efficiently. With a focus on timeliness, we ensure rapid order processing and shipping, meeting the demands of our customers both locally and internationally.</p>

            </div>


        </div>
    )
}

export default WhyChooseUs