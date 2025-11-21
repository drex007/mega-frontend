import React from "react";
import { formatFullDateTime } from "../../constants";

const TransactionDetailsComponent = ({
  showTransactionDetails,
  setShowTransactionDetails,
  details,
}) => {
  return (
    <div className="min-h-[500px] pt-8 shadow-xl px-8 ">
      <div className="flex justify-between">
        <div></div>
        <div
          className="bg-red-500 rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShowTransactionDetails(!showTransactionDetails);
          }}
        >
          <p className="text-white">x</p>
        </div>
      </div>
      <div className="flex justify-between text-[12px]">
        <div className="flex space-x-2 my-2  p-2 rounded-sm">
          <p>Transaction Option :</p>
          <p>{details?.option}</p>
        </div>
        <div className="flex space-x-2 my-2 p-2 rounded-sm">
          <p>Transaction Type :</p>
          <p>{details?.transaction_type}</p>
        </div>
      </div>

      <div className="flex flex-1 space-x-3 text-[12px]">
        <div className="flex-[0.5]">
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Reference :</p>
            <p>{details?.reference}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Transaction ID :</p>
            <p>{details?.transaction_id}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Senders Name :</p>
            <p>{details?.sender_name}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Senders Account Name :</p>
            <p>{details?.sender_bank_name}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Sender Account Number :</p>
            <p>{details?.sender_account}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Created At :</p>
            <p>{formatFullDateTime(details?.created_at)}</p>
          </div>
        </div>
        <div className="flex-[0.5]">
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Receiver Name :</p>
            <p>{details?.recipient_name}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Receiver Account Name :</p>
            <p>{details?.recipient_bank_name}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Recipient Account :</p>
            <p>{details?.recipient_account}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Amount :</p>
            <p>{details?.amount}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Narration :</p>
            <p>{details?.narration}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Fee :</p>
            <p>{details?.fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsComponent;
