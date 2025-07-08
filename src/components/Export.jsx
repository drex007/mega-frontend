import React from 'react'
import { importexport } from '../assets'

const ImportExport = () => {
    return (
        <div className='h-[80vh] lg:flex grid grid-cols-1 flex-1 justify-between items-center px-8 lg:mt-16 font-neulis text-gray-500'>
            <div className='lg:flex-[0.5]'>
                <div className=''>
                    <p className='text-primary-dark-green font-extralight lg:text-[50px] text-[20px] my-2'>Lets Work Together</p>

                    <div className='lg:text-[20px] text-[15px]'>
                        <p>• Need a reliable bulk supplier? <br></br>• Want to co-develop agro-projects? <br></br>• Interested in investment-grade agro assets? Partner with us for long-term success.</p>
                    </div>
                </div>
                <div>
                    <p className='text-primary-dark-green font-extralight lg:text-[50px] text-[20px] my-2'>Our Core Services</p>

                    <div className='lg:text-[20px] text-[15px] '>
                        • Export-Grade Farm Produce<br></br> • Agro Investment & Advisory<br></br> • Sourcing & Aggregation <br></br> • International Market Access Solutions
                    </div>
                </div>


            </div>
            <div className='lg:flex-[0.5] flex lg:justify-end'>
                <img src={importexport} className='' />
            </div>
        </div>
    )
}

export default ImportExport
