import React, {useEffect, useState} from "react";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency } from "../../constants";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAdminDetailsAction } from "../../Api/admin/admin.api";

const DisplayBoard = () => {

    const {current_admin } = useSelector(state => state.admin)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


  useEffect(() => {
    dispatch(getAdminDetailsAction({navigate}))
  
  }, [])
  
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <AdminDashBoardCard title={"Total users"} value={"1000"} />
        <AdminDashBoardCard
          title={"Total amount processed"}
          value={`N ${formatCurrency(10000.567, "NGN")}`}
        />
        <AdminDashBoardCard title={"Total orders"} value={"1000"} />
        <AdminDashBoardCard title={"Amount in sytem"} value={"1000"} />
        <AdminDashBoardCard title={"Users"} value={"1000"} />
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="">
            <input type="text" name="" placeholder="Enter mega id" id="" className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light" />

        </div>

      </div>

      <div className="my-10">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="bg-neutral-secondary-soft border-b border-default text-[12px]">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  Users
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
      
              <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                 Emmanuel James Aforlabi
                </th>
                <td class="px-6 py-4">MEGS-MEGASX</td>
                <td class="px-6 py-4">Active</td>
                <td class="px-6 py-4">June 12 2009</td>
                {/* <td class="px-6 py-4 flex space-x-2">
                 <button className="bg-green-500 p-2 text-[12px] text-white">Activate </button>
                  <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate </button>
                   <button className="bg-blue-500 p-2 text-[12px] text-white">Fine user</button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
