import React from "react";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency } from "../../constants";

const Users = () => {
  return (
    <div className="p-4">
      
      <div className="flex justify-between">
        <div>
            Users
        </div>
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
                <th scope="col" class="px-6 py-3 font-medium">
                  Actions
                </th>
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
                <td class="px-6 py-4 flex space-x-2">
                 <button className="bg-green-500 p-2 text-[12px] text-white">Activate </button>
                  <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate </button>
                   <button className="bg-blue-500 p-2 text-[12px] text-white">Fine user</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
