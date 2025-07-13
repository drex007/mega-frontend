import React from 'react'
import { handshake } from '../assets'


const GlobalFootPrint = () => {
    return (
        <div className='w-full bg-black text-white font-neulis'>

            <div style={{ backgroundImage: `url(${handshake})` }} className='lg:h-[100vh] h-[25vh] lg:w-full w-[100vw] bg-no-repeat bg-cover'>

            </div>
            <div className='py-8 lg:px-16 px-4'>
                <p className='text-green-300 lg:text-[55px] text-[22px] font-light lg:w-3/5 w-full flex lg:text-left text-center'>GLOBAL FOOTPRINT & PARTNERSHIPS</p>
                <p className='lg:text-[15px] text-[12px] font-fractul lg:w-5/6 w-full flex lg:text-left text-center'>Operating from Nigeria and Canada, Megas Agriculture connects African farmers to premium international markets. Our expanding footprint enables us to deliver consistent quality across:</p>
                <p className='flex lg:text-[15px] lg:justify-start justify-center lg:text-left text-center text-[10px] w-full text-primary-light-green'>Africa | North America | Europe | Middle East | Asia</p>
                <p className='flex lg:justify-start  justify-center  text-center lg:text-left text-green-300 lg:text-[40px] text-[18px] font-light'>Our Global Network Includes:</p>
                <p className='flex lg:justify-start justify-center text-center lg:text-left font-fractul lg:text-[15px] text-[12px]'>• Export distributors<br></br> • Wholesale food processors<br></br> • Agri-investment firms <br></br>• Import/export traders <br></br>• Retailers & food supply chains</p>
                <p className='flex lg:justify-start justify-center text-center lg:text-left py-4 lg:text-[15px] text-[12px] font-fractul'>Building Bridges Between Producers & Global Buyers By digitizing supply chains, verifying quality at the source, and empowering farmers with market access, we make agro exports seamless, traceable, and profitable for all stakeholders.</p>

            </div>
        </div>
    )
}

export default GlobalFootPrint
