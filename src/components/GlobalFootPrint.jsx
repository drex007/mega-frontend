import React from 'react'
import { handshake } from '../assets'


const GlobalFootPrint = () => {
    return (
        <div className='w-full bg-black text-white font-neulis'>

            <div style={{ backgroundImage: `url(${handshake})` }} className='lg:h-[100vh] h-[25vh] lg:w-full w-[100vw] bg-no-repeat bg-cover'>

            </div>
            <div className='py-8 px-4'>
                <p className='text-green-300 lg:text-[40px] text-[20px] font-light'>GLOBAL FOOTPRINT & PARTNERSHIPS</p>
                <p className='lg:text-[15px] text-[15px]'>Operating from Nigeria and Canada, Megas Agriculture connects African farmers to premium international markets. Our expanding footprint enables us to deliver consistent quality across:
                    <br></br> <span className='text-primary-dark-green'>Africa | North America | Europe | Middle East | Asia</span></p>
                <p className='text-green-300 lg:text-[40px] text-[20px] font-light'>Our Global Network Includes:</p>
                <p>• Export distributors<br></br> • Wholesale food processors<br></br> • Agri-investment firms <br></br>• Import/export traders <br></br>• Retailers & food supply chains</p>
                <p className='py-4 lg:text-[15px] text-[15px]'>Building Bridges Between Producers & Global Buyers By digitizing supply chains, verifying quality at the source, and empowering farmers with market access, we make agro exports seamless, traceable, and profitable for all stakeholders.</p>

            </div>
        </div>
    )
}

export default GlobalFootPrint
