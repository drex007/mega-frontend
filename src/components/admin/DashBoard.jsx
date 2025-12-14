import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../ContextAPI";
import SideBar from "./SideBar";
import DisplayBoard from "./DisplayBoard";
import Orders from "./Orders";
import Transactions from "./Transactions";
import Users from "./Users";
import Ledger from "./Ledger";
import Verifications from "./Verifications";

import {
  addDeliveryAgent,
  AdminFeeModal,
  Admins,
  dashBoard,
  fineuserModal,
  KYCsConfig,
  ledgerConfig,
  OrdersConfig,
  TransactionsConfig,
  usersConfig,
} from "../../config/adminConfig";
import FineAUserModal from "../../modals/admin/FineAUserModal";
import AddDeliveryAgentModal from "../../modals/admin/AddDeliveryAgentModal";
import MegaAdmins from "./MegaAdmins";
import UpdateAdminFeesModal from "../../modals/admin/UpdateAdminFeesModal";

const DashBoard = () => {
  const { AdminPage, modalConfig, setModalConfig } =useContext(AppContext);

  return (
    <div className="py-4 font-spacegrotesk  h-screen">
      {modalConfig == fineuserModal && <FineAUserModal />}
      {modalConfig == addDeliveryAgent && <AddDeliveryAgentModal />}
      {modalConfig == AdminFeeModal && <UpdateAdminFeesModal />}

      <div className="flex flex-1">
        <div className="flex-[0.1]">
          <SideBar />
        </div>
        <div className="flex-[0.9] h-full max-h-screen overflow-y-auto">
          {AdminPage == dashBoard && <DisplayBoard />}
     
          {/* <DisplayBoard /> */}
          {AdminPage == OrdersConfig && <Orders />}
          {AdminPage == TransactionsConfig && <Transactions />}
          {AdminPage == Admins && <MegaAdmins />}
          {AdminPage == usersConfig && <Users />}
          {AdminPage == ledgerConfig && <Ledger />}
          {AdminPage == KYCsConfig && <Verifications />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
