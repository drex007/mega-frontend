import React from 'react'
import { cert1, cert2, cert3, cert4, cert5 } from '../assets'

const CertifcationCompliance = () => {
    return (
        <div className='lg:rounded-t-[100px]  bg-primary-green-black pb-8'>
            <p className='flex justify-center text-green-200 2xl:text-[70px] lg:text-[50px] text-[20px] py-8 font-neulis font-light'>CERTIFCATIONS & COMPLIANCE</p>
            <p className='flex lg:justify-center text-white font-neulis lg:px-16 px-4 lg:text-[20px] text-[15px]'>Megas Agriculture Limited is a fully certified, internationally compliant agribusiness and export company. We uphold the highest standards of transparency, sustainability, and quality assurance across our operations.</p>

            <div className='lg:p-8 p-4'>
                <div className='lg:flex grid grid-cols-1 justify-between p-4'>
                    <div className='lg:w-1/3 flex items-center space-x-4'>
                        <img src={cert1} />
                        <p className='text-white font-neulis lg:text-[20px] text-[14px]'>Registered with the Corporate Affairs Commission (Nigeria) RC 6944026</p>
                    </div>
                    <div className=' hidden  lg:w-2/6 2xl:2/5 lg:flex items-center space-x-4'>
                        <img src={cert4} />
                        <p className='text-white font-neulis lg:text-[20px] text-[14px]'>Licensed Agro-Exporter with the Nigerian Export Promotion Council (NEPC)</p>
                    </div>



                </div>
                <div className='lg:flex grid grid-cols-1  lg:justify-between p-4'>
                    <div className='lg:w-1/3 flex items-center space-x-4'>
                        <img src={cert2} />
                        <p className='text-white font-neulis lg:text-[20px] text-[14px]'>Registered with the Corporate Affairs Commission (Nigeria) RC 6944026</p>
                    </div>
                    <div className='lg:w-1/3 flex items-center space-x-4'>
                        <img src={cert5} />
                        <p className='text-white font-neulis lg:text-[20px] text-[14px]'>Registered with the Corporate Affairs Commission (Nigeria) RC 6944026</p>
                    </div>



                </div>
                <div className='lg:flex grid grid-cols-1 lg:justify-between p-4'>
                    <div className='lg:w-1/3 items-center space-x-4 flex'>
                        <img src={cert3} />
                        <p className='text-white font-neulis lg:text-[20px] text-[14px]'>Registered with the Corporate Affairs Commission (Nigeria) RC 6944026</p>
                    </div>


                </div>
            </div>
            <div className='lg:p-16 p-4'>
                <p className='text-green-300 lg:text-[30px] text-[20px] font-neulis'>What This Means for You:</p>
                <div className='font-neulis text-white lg:text-[20px] text-[14px]'>
                    • Guaranteed product quality
                    <br></br>• Hassle-free export processes
                    <br></br> • Transparent documentation and traceability
                    <br></br>• Regulatory assurance in multiple trade zones (Africa, North America, Europe)
                    <p className='py-8 italic'>Every shipment from Megas Agriculture meets global trade standards and is backed by a reliable, transparent, and ethical supply chain.</p>
                </div>
            </div>
        </div>
    )
}

export default CertifcationCompliance
