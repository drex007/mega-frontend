import React from 'react'
import { importexport } from '../assets'

const ImportExport = () => {
    return (
        <div className='h-[80vh] lg:flex grid grid-cols-1 flex-1 justify-between items-center lg:px-16 px-4 font-neulis text-gray-500'>
            <div className='flex lg:hidden'>
                <img src={importexport} className='' loading='lazy' alt='Incase you are looking for a platform for import and export of agro products' />
            </div>
            <div className='lg:flex-[0.5]'>
                <div className=''>
                    <p className='flex lg:justify-start lg:text-left justify-center text-center text-primary-dark-green font-extralight lg:text-[35px] text-[20px] my-2'>Lets Work Together</p>

                    <div className='flex lg:justify-start lg:text-left justify-center text-center lg:text-[15px] text-[12px] font-fractul'>
                        <p>• Need a reliable bulk supplier? <br></br>• Want to co-develop agro-projects? <br></br>• Interested in investment-grade agro assets? Partner with us for long-term success.</p>
                    </div>
                </div>
                <div>
                    <p className='flex lg:justify-start lg:text-left justify-center text-center text-primary-dark-green font-extralight lg:text-[35px] text-[20px] my-2'>Our Core Services</p>

                    <div className='flex lg:justify-start lg:text-left justify-center text-center lg:text-[15px] text-[12px] font-fractul'>
                        • Export-Grade Farm Produce<br></br> • Agro Investment & Advisory<br></br> • Sourcing & Aggregation <br></br> • International Market Access Solutions
                    </div>
                </div>


            </div>
            <div className='hidden lg:flex-[0.5] lg:flex lg:justify-end'>
                <img src={importexport} className='' loading='lazy' alt='Incase you are looking for a platform for import and export of agro products' />
            </div>
        </div>
    )
}

export default ImportExport
