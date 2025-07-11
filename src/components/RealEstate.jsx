import React from 'react'
import { annualReturn, calendar, choose, farmLogo, farmSetup, group, home, localReturn, realEstate, security, selectFarm, signContract, trackFarm, cocoa1, cashew1, poultry1, ginger1 } from '../assets'
import RealEstateCard from './RealEstateCard'
import FarmInvestmentCard from './FarmInvestmentCard'


const RealEstate = () => {
    return (
        <div className='w-full bg-white text-white font-neulis' id='realestate'>

            <div style={{ backgroundImage: `url(${realEstate})` }} className='lg:h-[100vh] h-[40vh] w-full bg-no-repeat bg-cover flex flex-col items-center justify-center '>
                <p className='lg:text-[60px] text-[25px] text-primary-green-black' >Own A Farm. Grow Wealth</p>
                <p className='lg:text-[60px] text-[25px] text-primary-green-black'>Impact Lives</p>
                <p className=' lg:text-[20px] text-[10px] text-primary-green-black'>"Invest in high-value, fully managed agri-farms across Nigeria"</p>

                <p className='px-8 py-3 rounded-full text-white bg-primary-light-green my-2'>Start Your Investment</p>

            </div>
            <p className='text-primary-green-black flex justify-center lg:text-[50px] text-[25px] my-4'>Why Agri-Real Estate ?</p>
            <div className='grid lg:grid-cols-4 '>
                <div className='p-8 '>
                    <RealEstateCard
                        title={"Security titled land"}
                        image={security}
                        text={"Own farm land with proper legal documentation"}

                    />
                </div>
                <div className='p-8'>
                    <RealEstateCard
                        title={"Fully managed farm"}
                        image={farmLogo}
                        text={"Fully managed farm We handle all farm operations from planting to harvest"}

                    />
                </div>
                <div className='p-8'>
                    <RealEstateCard
                        title={"Export and local return "}
                        image={localReturn}
                        text={"Export & local returns Earn income from both local and international markets"}

                    />
                </div>
                <div className='p-8'>
                    <RealEstateCard
                        title={"Track farm digitally"}
                        image={trackFarm}
                        text={"Track farm digitally stay connected, and updated with regular reports, and farm insights"}

                    />
                </div>
            </div>

            <p className='text-primary-green-black flex justify-center lg:text-[50px] text-[25px] my-4'>Farm Investment Explorer</p>
            <div className="lg:flex lg:space-x-4 grid px-4 gap-y-3">
                <select name="" id="" className='lg:w-1/3  py-4 bg-white border border-black text-black'>
                    <option value="">Filter Crop</option>

                </select>

                <select name="" id="" className='lg:w-1/3 py-4 bg-white border border-black text-black'>
                    <option value="">State</option>

                </select>
                <select name="" id="" className='lg:w-1/3 py-4 bg-white border border-black text-black'>
                    <option value="">Budget</option>

                </select>

            </div>
            <div className='my-16 grid grid-cols-1 lg:grid-cols-4 px-8 lg:gap-x-4'>
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
            <p className='text-primary-light-green flex justify-center lg:text-[50px] text-[25px] my-8'>How It Works?</p>
            <div className='text-black px-4 lg:flex lg:justify-between lg:space-y-0 space-y-4 font-neulis'>

                <div className='flex space-x-4'>
                    <img src={selectFarm} />
                    <div>
                        <p >Select Farm +</p>
                        <p>crop</p>
                    </div>
                </div>



                <div className='flex space-x-4'>
                    <img src={choose} />
                    <div>
                        <p>Choose</p>
                        <p>Ownership Model</p>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <img src={signContract} />
                    <div>
                        <p>Sign Contract +</p>
                        <p>Pay</p>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <img src={farmSetup} />
                    <div>
                        <p>Farm Setup &</p>
                        <p>Updates</p>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <img src={annualReturn} />
                    <div>
                        <p>Get Annual</p>
                        <p>Returns</p>
                    </div>
                </div>
            </div>
            <p className='text-primary-light-green flex justify-center lg:text-[50px] text-[25px] my-8'>Ownership Models</p>
            <div className="lg:flex justify-between grid px-4 lg:space-y-0 space-y-4">
                <div className='flex flex-col items-center text-black'>
                    <img src={home} />
                    <p className="text-black font-semibold my-2">Full Ownership</p>
                    <p className='justify-center text-black lg:w-3/5 w-4/5'>Purchase the property outright with full control and responsibility </p>
                    <p className='flex justify-center'>• Total control</p>
                    <p className='flex justify-center'>• 100% equity </p>
                </div>

                <div className='flex flex-col items-center text-black'>
                    <img src={calendar} />
                    <p className="text-black font-semibold my-2">Lease-To-Own</p>
                    <p className='text-black lg:w-3/5 w-4/5'>Gradually build ownership through lease payments</p>
                    <p className='flex justify-center'>• Fixed monthly cost</p>
                    <p className='flex'>• Path to ownership</p>
                </div>
                <div className='flex flex-col items-center text-black'>
                    <img src={group} />
                    <p className="text-black font-semibold my-2">Fractional Co-Investment</p>
                    <p className='text-black lg:w-3/5 w-4/5'>Own a share of the property alonside co-investors </p>
                    <p className='flex justify-center'>• Lower upfront cost </p>
                    <p className='flex justify-center'>• Shared expenses</p>
                </div>


            </div>
        </div >
    )
}

export default RealEstate
