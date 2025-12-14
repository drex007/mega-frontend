import React, { useContext, useEffect, useState } from "react";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency, formatFullDateTime } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAdminDetailsAction,
  adminGetDashboardAnalyticsAction,
  getUsersRouteAction,
  getAdminFeeAction,
} from "../../Api/admin/admin.api";
import { AppContext } from "../../ContextAPI";
import { AdminFeeModal } from "../../config/adminConfig";

const DisplayBoard = () => {
  const { dashboard_analytics, usersObject, admin_fees } = useSelector(
    (state) => state.admin
  );
    const { setModalConfig } =
      useContext(AppContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAdminDetailsAction({ navigate }));
    dispatch(adminGetDashboardAnalyticsAction());
    // dispatch(getUsersRouteAction());
    dispatch(getAdminFeeAction());
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <AdminDashBoardCard
          title={"Total users"}
          value={dashboard_analytics?.total_users ?? 0}
        />
        <AdminDashBoardCard
          title={"Total amount processed"}
          value={`N ${formatCurrency(
            dashboard_analytics?.total_amount_processed ?? 0,
            "NGN"
          )}`}
        />
        <AdminDashBoardCard
          title={"Total orders"}
          value={dashboard_analytics?.total_orders_processed ?? 0}
        />
        <AdminDashBoardCard
          title={"Amount in sytem"}
          value={`N ${formatCurrency(
            dashboard_analytics?.total_amount_in_system ?? 0,
            "NGN"
          )}`}
        />
        <AdminDashBoardCard
          title={"Total transactions"}
          value={dashboard_analytics?.total_transactions ?? 0}
        />
        <AdminDashBoardCard
          title={"Admins"}
          value={dashboard_analytics?.total_admins ?? 0}
        />
        <AdminDashBoardCard
          title={"Service Charge and  Delivery Fee"}
          value={`N ${admin_fees?.service_charge}  -------------  ${admin_fees?.delivery_fee}%`}
        />
      </div>

      <div className="flex justify-between w-full">
        <div></div>
        <button
          className="bg-green-400 text-white font-poppins px-4 rounded-sm py-2"
          onClick={() => {
       
            setModalConfig(AdminFeeModal);
          }}
        >
          {" "}
          Admin charge
        </button>
      </div>

      <div className="my-10 ">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead
              className="bg-neutral-secondary-soft border-b border-default text-[12px]"
           
            >
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Mega ID
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Last online
                </th>
                {/* <th scope="col" class="px-6 py-3 font-medium">
                  Actions
                </th> */}
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {usersObject?.users?.map((e, i) => (
                <tr
                  key={i}
                  class="odd:bg-neutral-primary even:bg-neutral-secondary-soft"
                  className=""
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {e?.email}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {e?.first_name} {e?.last_name}
                  </th>
                  <td class="px-6 py-4"> {e?.mega_id}</td>
                  <td class="px-6 py-4">
                    <p
                      className={`${
                        e?.is_active ? "bg-green-300" : "bg-red-400"
                      } flex justify-center py-2 `}
                    >
                      {" "}
                      {e?.is_active ? "Active" : "In-active"}{" "}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    {e?.last_login ? formatFullDateTime(e?.last_login) : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
