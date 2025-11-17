import React, { useContext, useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { BiEditAlt } from "react-icons/bi";
import { AppContext } from "../../ContextAPI";
// import { allCoinToNGN, allDashBoardTranstion, allNGNToCoin } from '../../adminPageConfig';
import { TbEyeShare } from "react-icons/tb";

import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { formatCurrency, formatFullDateTime } from "../../constants";
import { GoChevronRight } from "react-icons/go";
import SideBar from "./SideBar";
import DisplayBoard from "./DisplayBoard";
import Orders from "./Orders";
import Transactions from "./Transactions";
import Users from "./Users";
import Ledger from "./Ledger";
import Verifications from "./Verifications";


import {
  dashBoard,
  KYCsConfig,
  ledgerConfig,
  OrdersConfig,
  TransactionsConfig,
  usersConfig,
} from "../../config/adminConfig";

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [goToPage, setgoToPage] = useState(0);
  const [currentSelectedIndex, setcurrentSelectedIndex] = useState(-1);
    const { AdminPage, setAdminPage } = useContext(AppContext);

  const [transactionsTableQuery, setTransactionsTableQuery] = useState({
    limit: 25,
    transactionType: null,
    from: null,
    to: null,
  });

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  // useEffect(() => {
  //     const getUser = localStorage.getItem("user")
  //     if (!getUser) navigate("/login")

  // }, [])

  const handleGoToPage = (e) => {
    setgoToPage(Number(e.target.value));
  };

  useEffect(() => {}, []);

  return (
    <div className="py-4 px-2 font-spacegrotesk bg-gray-50 h-screen">
      <div className="flex flex-1">
        <div className="flex-[0.1]">
          <SideBar />
        </div>
        <div className="flex-[0.9]">
          {AdminPage == dashBoard && <DisplayBoard />}
          {/* <DisplayBoard /> */}
          {AdminPage == OrdersConfig && <Orders />}
          {AdminPage == TransactionsConfig && <Transactions />}
          {AdminPage == usersConfig && <Users />}
          {AdminPage == ledgerConfig && <Ledger />}
          {AdminPage == KYCsConfig && <Verifications />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
