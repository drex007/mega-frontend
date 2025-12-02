import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { formatCurrency, formatFullDateTime } from "../../constants";
import { AppContext } from "../../ContextAPI";

const UserTransactions = ({
  showUserTransactions,
  setShowUserTransactions,
}) => {
  const { user_transaction } = useSelector((state) => state.admin);
  const [currentPage, setCurrentPage] = useState(1);
  const { setModalConfig, currentUserTransaction } = useContext(AppContext);
  const handleCurrentPageChange = (e) => {
    if (e.target.value && e.target.value > 0) {
      setCurrentPage(e.target.value);
    }
  };
  return (
    <div className="min-h-[500px] pt-8  ">
      <div className="flex justify-between">
        <div>{currentUserTransaction?.first_name ?? ""} {currentUserTransaction?.last_name ?? ""} Transaction history</div>
        <div
          className="bg-red-500 rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShowUserTransactions(!showUserTransactions);
          }}
        >
          <p className="text-white">x</p>
        </div>
      </div>
      <div className="my-10 text-[14px]">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="bg-neutral-secondary-soft border-b border-default text-[12px]">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium"></th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Sender
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Option
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Type
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Recipient
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Date Time
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {user_transaction?.transactions?.map((e, i) => (
                <tr
                  class="odd:bg-neutral-primary even:bg-neutral-secondary-soft"
                  key={i}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {i + 1}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {e?.sender_name ?? "N/A"}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    N {formatCurrency(e?.amount ?? 0, "NGN")}
                  </th>
                  <td
                    class="px-6 py-4"
                    className={`${
                      e?.option == "DEBIT" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {e?.option}
                  </td>
                  <td class="px-6 py-4">{e?.transaction_type}</td>
                  <td class="px-6 py-4">{e?.recipient_bank_name}</td>
                  <td class="px-6 py-4">
                    {e?.created_at ? formatFullDateTime(e?.created_at) : ""}
                  </td>
                  <td class="px-6 py-4 flex space-x-2">
                    {/* <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate user</button> */}
                    <button
                      className="bg-blue-500 p-2 text-[12px] text-white"
                      onClick={() => {
                        // setCurrentTransactionDetails(e);
                        // setShowTransactionDetails(!showTransactionDetails);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex items-center space-x-3">
            {user_transaction?.current_page > 1 && (
              <button
                className="bg-blue-500 text-white p-2"
                onClick={() => {
                  if (currentPage >= 2) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                Prev
              </button>
            )}
            <p className="text-[12px]">
              Current Page: {user_transaction?.current_page}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex">
              <input
                type="number"
                name=""
                id=""
                className="border p-2 text-[10px] w- outline-none"
                placeholder="Enter page number"
                onChange={(e) => handleCurrentPageChange(e)}
              />
            </div>
            {user_transaction?.current_page < user_transaction?.total_pages && (
              <button
                className="bg-orange-500 text-white p-2"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTransactions;
