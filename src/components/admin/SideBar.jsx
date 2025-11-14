import React, { useContext } from "react";
import { RiHome4Line } from "react-icons/ri";
import { AppContext } from "../../ContextAPI";
import { dashBoard, users, Transactions, Orders, ledger, KYCs  } from "../../config/adminConfig";
import { TbLogout, TbUsers } from "react-icons/tb";
import { TbExchange } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SideBar = () => {
  const { AdminPage, setAdminPage } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logout successful");
  };
  return (
    <div className="px-4  font-spacegrotesk">
      <p className="f text-[20px] my-1 font-poppin">Megas Admin</p>

      <div
        className={`${
          AdminPage === dashBoard ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(dashBoard)}
      >
        <RiHome4Line size={25} />
        <p className="text-[13px]">Home</p>
      </div>
      <div
        className={`${
          AdminPage === Transactions ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(Transactions)}
      >
        <TbExchange size={25} />
        <p className="text-[13px]">Transactions</p>
      </div>
      <div
        className={`${
          AdminPage === users ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(users)}
      >
        <TbUsers size={25} />
        <p className="text-[13px]">Users</p>
      </div>

      <div
        className={`${
          AdminPage === Orders ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(Orders)}
      >
        <GiShoppingBag size={25} />
        <p className="text-[13px]">Orders</p>
      </div>

      <div
        className={`${
          AdminPage === ledger ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(ledger)}
      >
        <MdMenuBook size={25} />
        <p className="text-[13px]">Ledger</p>
      </div>

      <div
        className={`${
          AdminPage === KYCs ? "bg-primary-light-green text-white" : ""
        } flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={() => setAdminPage(KYCs)}
      >
        <GrDocumentVerified size={25} />
        <p className="text-[13px]">KYCs</p>
      </div>

      <div
        className={`flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`}
        onClick={logout}
      >
        <TbLogout size={25} />
        <p className="text-[13px]">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
