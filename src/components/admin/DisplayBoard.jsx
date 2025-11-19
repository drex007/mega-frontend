import React, { useEffect, useState } from "react";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAdminDetailsAction,
  adminGetDashboardAnalyticsAction,
  getUsersRouteAction,
} from "../../Api/admin/admin.api";

const DisplayBoard = () => {
  const { current_admin, dashboard_analytics, usersObject } = useSelector(
    (state) => state.admin
  );
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAdminDetailsAction({ navigate }));
    dispatch(adminGetDashboardAnalyticsAction());
    dispatch(getUsersRouteAction());
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
      </div>
      {/* <div className="flex justify-between my-8">
        <div></div>
        <div className="">
          <input
            type="text"
            name=""
            placeholder="Enter mega id"
            id=""
            className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light"
          />
        </div>
      </div> */}

      <div className="my-10 ">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead
              class="bg-neutral-secondary-soft border-b border-default text-[12px]"
              className=""
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
                  <td class="px-6 py-4"> {e?.last_login}</td>
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
