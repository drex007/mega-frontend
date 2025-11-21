import AdminDashBoardCard from "./AdminDashBoardCard";
import { formatCurrency, formatFullDateTime } from "../../constants";
import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPaymentHistoriesAction,
  getTransactionByIDAction,
} from "../../Api/admin/admin.api";
import TransactionDetailsComponent from "./TransactionDetailsComponent";
import { BsSearch } from "react-icons/bs";

const Transactions = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const { payment_histories } = useSelector((state) => state.admin);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [currentTransactionDetails, setCurrentTransactionDetails] =
    useState(null);

  const [formdata, setFormdata] = useState({
    transactionId: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchPaymentHistoriesAction());
  }, [formdata]);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between">
        <div>
          <p>
            {showTransactionDetails ? "Transaction Detail" : "Transactions"}
          </p>
        </div>
        <div className="border px-4">
          {!showTransactionDetails && (
            <div className="flex space-x-2 items-center">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="transactionId"
                placeholder="Enter transaction  or reference id"
                id=""
                className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light text-[12px]"
              />
              <BsSearch
                className="cursor-pointer"
                onClick={() =>
                  dispatch(
                    getTransactionByIDAction({ id: formdata.transactionId })
                  )
                }
              />
            </div>
          )}
        </div>
      </div>

      {!showTransactionDetails && (
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
                {payment_histories?.transactions?.map((e, i) => (
                  <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
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
                          setCurrentTransactionDetails(e);
                          setShowTransactionDetails(!showTransactionDetails);
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
        </div>
      )}
      {showTransactionDetails && (
        <TransactionDetailsComponent
          showTransactionDetails={showTransactionDetails}
          setShowTransactionDetails={setShowTransactionDetails}
          details={currentTransactionDetails}
        />
      )}
    </div>
  );
};

export default Transactions;
