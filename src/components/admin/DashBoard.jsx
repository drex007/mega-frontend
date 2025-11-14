import React, { useContext, useState, useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import AdminDashBoardCard from './AdminDashBoardCard';
import { BiEditAlt } from "react-icons/bi";
import { AppContext } from '../../ContextAPI';
// import { allCoinToNGN, allDashBoardTranstion, allNGNToCoin } from '../../adminPageConfig';
import { TbEyeShare } from "react-icons/tb";

import { CgSearch } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency, formatFullDateTime} from '../../constants';
import { GoChevronRight } from "react-icons/go";
import SideBar from './SideBar';

const DashBoard = () => {
  
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [goToPage, setgoToPage] = useState(0)
    const [currentSelectedIndex, setcurrentSelectedIndex] = useState(-1)


    const [transactionsTableQuery, setTransactionsTableQuery] = useState({
        limit: 25,
        transactionType: null,
        from: null,
        to: null
    })







    useEffect(() => {
     

    }, [])



    useEffect(() => {


    }, [])

 
    // useEffect(() => {
    //     const getUser = localStorage.getItem("user")
    //     if (!getUser) navigate("/login")

    // }, [])

    const handleGoToPage = (e) => {
        setgoToPage(Number(e.target.value))
    }

    useEffect(() => {

    }, [])




    return (
        <div className='py-4 px-2 font-spacegrotesk bg-gray-50 h-screen'>
            <div className='flex flex-1'>
                <div className='flex-[0.1]'>
                    <SideBar />
                </div>

            </div>
       
        </div>
    )
}

export default DashBoard