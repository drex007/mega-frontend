import React from 'react'
import { importexport } from '../assets'

const ImportExport = () => {
    return (
        <div className='h-[80vh] flex flex-1 justify-between items-center px-8 font-neulis text-gray-500'>
            <div className='flex-[0.5]'>
                <div className=''>
                    <p className='text-primary-dark-green font-extralight text-[50px]'>Lets Work Together</p>
                    <p>• Need a reliable bulk supplier? <br></br>• Want to co-develop agro-projects? <br></br>• Interested in investment-grade agro assets? Partner with us for long-term success.</p>
                </div>
                <div>
                    <p className='text-primary-dark-green font-extralight text-[50px]'>Our Core Services</p>
                    • Export-Grade Farm Produce<br></br> • Agro Investment & Advisory<br></br> • Sourcing & Aggregation <br></br> • International Market Access Solutions
                </div>


            </div>
            <div className='flex-[0.5] flex justify-end'>
                <img src={importexport}  className='' />
            </div>
        </div>
    )
}

export default ImportExport
