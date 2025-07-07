import React from 'react'
import { importexport } from '../assets'

const ImportExport = () => {
    return (
        <div className='h-[80vh] lg:flex grid grid-cols-1 flex-1 justify-between items-center px-8 font-neulis text-gray-500'>
            <div className='lg:flex-[0.5]'>
                <div className=''>
                    <p className='text-primary-dark-green font-extralight lg:text-[50px] text-[30px]'>Lets Work Together</p>
                    <p>• Need a reliable bulk supplier? <br></br>• Want to co-develop agro-projects? <br></br>• Interested in investment-grade agro assets? Partner with us for long-term success.</p>
                </div>
                <div>
                    <p className='text-primary-dark-green font-extralight lg:text-[50px] text-[30px]'>Our Core Services</p>
                    • Export-Grade Farm Produce<br></br> • Agro Investment & Advisory<br></br> • Sourcing & Aggregation <br></br> • International Market Access Solutions
                </div>


            </div>
            <div className='lg:flex-[0.5] flex lg:justify-end'>
                <img src={importexport}  className='' />
            </div>
        </div>
    )
}

export default ImportExport
