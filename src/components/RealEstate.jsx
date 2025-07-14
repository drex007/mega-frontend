import React from 'react'
import { annualReturn, calendar, choose, farmLogo, farmSetup, group, home, localReturn, realEstate, security, selectFarm, signContract, trackFarm, cocoa1, cashew1, poultry1, ginger1 } from '../assets'
import RealEstateCard from './RealEstateCard'
import FarmInvestmentCard from './FarmInvestmentCard'


const RealEstate = () => {
    return (
        <div className='w-full bg-white text-white font-neulis mb-4' id='realestate'>

            <div style={{ backgroundImage: `url(${realEstate})` }} className='lg:h-[100vh] h-[80vh] w-full bg-no-repeat bg-cover flex flex-col items-center justify-center '>
                <p className='lg:text-[60px] text-[25px] text-primary-green-black' >Own A Farm. Grow Wealth</p>
                <p className='lg:text-[60px] text-[25px] text-primary-green-black'>Impact Lives</p>
                <p className=' lg:text-[20px] text-[10px] text-primary-green-black font-fractul font-semibold'>"Invest in high-value, fully managed agri-farms across Nigeria"</p>

                <p className='px-8 py-3 rounded-full text-white bg-primary-light-green my-2 font-fractul font-semibold'>Start Your Investment</p>

            </div>
            <p className='text-primary-green-black flex justify-center lg:text-[50px] text-[25px] my-4'>Why Agri-Real Estate ?</p>
            <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-y-0 gap-y-2 '>
                <div className='lg:p-8 px-2 '>
                    <RealEstateCard
                        title={"Security titled land"}
                        image={security}
                        text={"Own farm land with proper legal documentation, we ensure a hassle free experience"}

                    />
                </div>
                <div className='lg:p-8 px-2'>
                    <RealEstateCard
                        title={"Fully managed farm"}
                        image={farmLogo}
                        text={"Fully managed farm We handle all farm operations from planting to harvest"}

                    />
                </div>
                <div className='lg:p-8 px-2'>
                    <RealEstateCard
                        title={"Export and local return "}
                        image={localReturn}
                        text={"Export & local returns Earn income from both local and international markets"}

                    />
                </div>
                <div className='lg:p-8 px-2'>
                    <RealEstateCard
                        title={"Track farm digitally"}
                        image={trackFarm}
                        text={"Track farm digitally stay connected, and updated with regular reports, and farm insights"}

                    />
                </div>
            </div>

            <p className='text-primary-green-black flex justify-center lg:text-[50px] text-[20px] my-4'>Farm Investment Explorer</p>
            <div className="lg:flex lg:space-x-4 grid px-4 gap-y-3 font-fractul">
                <select name="" id="" className='lg:w-1/3 text-[12px]  py-4 bg-white border border-black text-black'>
                    <option value="">Filter Crop</option>

                </select>

                <select name="" id="" className='lg:w-1/3 text-[12px] py-4 bg-white border border-black text-black'>
                    <option value="">State</option>

                </select>
                <select name="" id="" className='lg:w-1/3 text-[12px] py-4 bg-white border border-black text-black'>
                    <option value="">Budget</option>

                </select>

            </div>
            <div className='lg:my-16 grid grid-cols-2 lg:grid-cols-4 px-8 lg:gap-x-16 gap-x-4'>
                <FarmInvestmentCard
                    image={cocoa1}
                    text={"Cocoa"}
                    location={"Cross River"}
                    price={"N500k - N5m"}

                />
                <FarmInvestmentCard
                    image={cashew1}
                    text={"Cashew"}
                    location={"Nasarawa"}
                    price={"N1.5m - N5m"}

                />

                <FarmInvestmentCard
                    image={poultry1}
                    text={"Poultry"}
                    location={"Plateau(Jos)"}
                    price={"N350k"}

                />
                <FarmInvestmentCard
                    image={ginger1}
                    text={"Ginger"}
                    location={"Kaduna"}
                    price={"N700k - N4m"}

                />

            </div>
            <p className='text-primary-light-green flex justify-center lg:text-[40px] text-[25px] lg:my-8 my-4'>How It Works?</p>
            <div className='text-black lg:px-8 px-8 grid lg:grid-cols-5 grid-cols-2 lg:justify-between lg:space-y-0 space-y-4 font-fractul lg:text-[14px] text-[12px]'>

                <div className='flex space-x-4 items-center'>
                    <img src={selectFarm} className='lg:w-1/6 w-1/6' />
                    <div>
                        <p >Select Farm +</p>
                        <p>crop</p>
                    </div>
                </div>



                <div className='flex space-x-4 items-center'>
                    <img src={choose} className='lg:w-1/6 w-1/6' />
                    <div>
                        <p>Choose</p>
                        <p>Ownership Model</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <img src={signContract} className='lg:w-1/6 w-1/6' />
                    <div>
                        <p>Sign Contract +</p>
                        <p>Pay</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <img src={farmSetup} className='lg:w-1/6 w-1/6' />
                    <div>
                        <p>Farm Setup &</p>
                        <p>Updates</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <img src={annualReturn} className='lg:w-1/6 w-1/6' />
                    <div>
                        <p>Get Annual</p>
                        <p>Returns</p>
                    </div>
                </div>
            </div>
            <p className='text-primary-light-green flex justify-center lg:text-[40px] text-[25px] my-8'>Ownership Models</p>
            <div className="lg:flex lg:justify-between grid grid-col-1 px-4 lg:space-y-0 space-y-4 font-fractul">
                <div className='flex flex-col items-center text-black text-[13px]'>
                    <img src={home} />
                    <p className="text-black font-semibold my-2">Full Ownership</p>
                    <p className='justify-center text-black lg:w-2/5 w-4/5 text-center'>Purchase the property outright with full control and responsibility </p>
                    <p className='flex justify-center text-center'>• Total control</p>
                    <p className='flex justify-center text-center'>• 100% equity </p>
                </div>

                <div className='flex flex-col items-center text-black text-[13px]'>
                    <img src={calendar} />
                    <p className="text-black font-semibold my-2">Lease-To-Own</p>
                    <p className='text-black lg:w-3/5 w-4/5 text-center'>Gradually build ownership through lease payments</p>
                    <p className='flex justify-center text-center'>• Fixed monthly cost</p>
                    <p className='flex text-center'>• Path to ownership</p>
                </div>
                <div className='flex flex-col items-center text-black text-[13px]'>
                    <img src={group} />
                    <p className="text-black font-semibold my-2">Fractional Co-Investment</p>
                    <p className='text-black lg:w-3/5 w-4/5 text-center'>Own a share of the property alonside co-investors </p>
                    <p className='flex justify-center text-center'>• Lower upfront cost </p>
                    <p className='flex justify-center text-center'>• Shared expenses</p>
                </div>


            </div>
        </div >
    )
}

export default RealEstate
