import React from 'react'
import { handshake } from '../assets'


const GlobalFootPrint = () => {
    return (
        <div className='w-full bg-black text-white font-neulis'>

            <div style={{ backgroundImage: `url(${handshake})` }} className='h-[100vh] w-full bg-no-repeat bg-cover'>

            </div>
            <div className='p-8'>
                <p className='text-green-300 text-[40px] font-light'>GLOBAL FOOTPRINT & PARTNERSHIPS</p>
                <p>Operating from Nigeria and Canada, Megas Agriculture connects African farmers to premium international markets. Our expanding footprint enables us to deliver consistent quality across:
                    <br></br> <span className='text-primary-dark-green'>Africa | North America | Europe | Middle East | Asia</span></p>
                <p className='text-green-300 text-[40px] font-light'>Our Global Network Includes:</p>
                <p>• Export distributors<br></br> • Wholesale food processors<br></br> • Agri-investment firms <br></br>• Import/export traders <br></br>• Retailers & food supply chains</p>
                <p className='py-4'>Building Bridges Between Producers & Global Buyers By digitizing supply chains, verifying quality at the source, and empowering farmers with market access, we make agro exports seamless, traceable, and profitable for all stakeholders.</p>

            </div>
        </div>
    )
}

export default GlobalFootPrint
