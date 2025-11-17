import React, { useState } from "react";
import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency } from "../../constants";

const Verifications = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between">
        <div>
          <p>Verifications</p>
        </div>
        <div className="">
          <input
            type="text"
            name=""
            placeholder="Enter user email"
            id=""
            className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light"
          />
        </div>
      </div>

      <div className="my-10 text-[14px]">
        <div className="grid grid-cols-2  justify-between py-4">
          <p
            onClick={() => {
              setCurrentTab(0);
            }}
            className={`${
              currentTab == 0
                ? "bg-green-500 text-white"
                : "bg-transparent text-black"
            } w-ful py-2 flex justify-center cursor-pointer border`}
          >
            KYC
          </p>
          <p
            onClick={() => {
              setCurrentTab(1);
            }}
            className={`${
              currentTab == 1
                ? "bg-green-500 text-white"
                : "bg-transparent text-black"
            } w-ful py-2 flex justify-center cursor-pointer border`}
          >
            KYB
          </p>
     
        </div>
        <div className="grid">
          <label htmlFor="">Status</label>
          <select name="" id="" className=" focus:outline-none my-4 px-4 py-2 bg-white border">
            <option value="">Pending</option>
            <option value="">Approved</option>
          </select>
        </div>
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="bg-neutral-secondary-soft border-b border-default text-[12px]">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  Date Created
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Verification ID
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
                  12-05-2009
                </th>
                <td class="px-6 py-4">James Bujunbura</td>
                <td class="px-6 py-4">Active</td>
                <td class="px-6 py-4">Rx-11111111</td>
                <td class="px-6 py-4 flex space-x-2">
                  {/* <button className="bg-green-500 p-2 text-[12px] text-white">
                    Add agent
                  </button> */}
                  {/* <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate user</button> */}
                  <button className="bg-blue-500 p-2 text-[12px] text-white">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Verifications;
