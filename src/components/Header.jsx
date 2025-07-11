import React, { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { logo, textlogo, textlogowhite } from '../assets'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";




const Header = () => {
    const [showMenuBar, setShowMenuBar] = useState(false)

    return (
        <div className='lg:px-8 px-2 py-6 h-[80px] lg:flex  bg-primary-dark-green justify-between'>
            <div className='flex space-x-3 items-center'>
                <img src={logo} className='h-[30px] lg:max-h-10' />
                <img src={textlogowhite} className='h-[30px] lg:max-h-10' />
            </div>
            <div className='hidden lg:flex space-x-8 items-center'>
                <p className='text-white cursor-pointer'>Megas</p>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={300}

                >
                    <p className='text-white cursor-pointer lg:text-[14px]'>About Us</p>


                </Link>
                <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}

                >

                    <p className='text-white cursor-pointer lg:text-[14px]'>Our Products</p>

                </Link>
                <Link
                    to="realestate"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={1000}

                >

                    <p className='text-white cursor-pointer lg:text-[14px]'>Our Services</p>

                </Link>


                {/* <p className='text-white cursor-pointer lg:text-[14px]'>Our Team</p> */}
                <Link
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={1500}

                >
                    <p className='text-white cursor-pointer lg:text-[12px] border border- rounded-sm py-1 px-2'>Contact Us</p>

                </Link>


            </div>

            <div className='relative lg:hidden flex justify-end -mt-8'>
                {!showMenuBar && <HiOutlineMenuAlt2 size={40} color='white' className='cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />}

                {showMenuBar &&
                    <div className='absolute z-50 transition-transform ease-in duration-9000 lg:hidden -mr-2 flex-col px-4 py-4 max-h-[450px] w-4/5 shadow-2xl shadow-gray-500 rounded-2xl top-0 bg-primary-dark-green  right-0'>
                        <ImCancelCircle size={30} color='white' className=' cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />
                        <div className='items-center text-white font-neulis  text-[15px]'>
                            <p className=' cursor-pointer my-4'>Megas</p>
                            <hr className='text-white'></hr>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={300}

                            >
                                <p className=' cursor-pointer my-4'>About Us</p>
                            </Link>

                            <hr className='text-white'></hr>
                            <Link
                                to="products"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}

                            >

                                <p className=' cursor-pointer my-4'>Our Products</p>
                            </Link>

                            <hr className='text-white'></hr>

                            <Link
                                to="realestate"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={1000}

                            >
                                <p className=' cursor-pointer my-4'>Our Services</p>
                            </Link>

                            <hr className='text-white'></hr>
                            {/* <p className=' cursor-pointer my-4'>Our Team</p> */}
                            <hr className='text-white'></hr>
                            <Link
                                to="contactus"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={1500}

                            >
                                <p className=' cursor-pointer my-4'>Contact Us</p>

                            </Link>



                        </div>

                    </div>

                }
            </div>




        </div>
    )
}

export default Header
