import React, { useContext, useState } from "react";
import { AppContext } from "../../ContextAPI";
import { formatFullDateTime } from "../../constants";
import { acceptOrRejectKybsAction } from "../../Api/admin/admin.api";
import { useDispatch } from "react-redux";

const VerificationDetails = ({
  setShowVerificationDetails,
  showVerificationDetails,
}) => {
  const dispatch = useDispatch();
  const { currentVerification, setCurrentVerification } =
    useContext(AppContext);
  return (
    <div className="min-h-[500px] py-8 shadow-xl px-8 ">
      <div className="flex justify-between">
        <div></div>
        <div
          className="bg-red-500 rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShowVerificationDetails(!showVerificationDetails);
          }}
        >
          <p className="text-white">x</p>
        </div>
      </div>
      <div className="flex justify-between text-[12px]">
        <div className="flex space-x-2 my-2  p-2 rounded-sm">
          <p>Verification Details </p>
          <p>{currentVerification?.option}</p>
        </div>
        {/* <div className="flex space-x-2 my-2 p-2 rounded-sm">
          <p>Transaction Type :</p>
          <p>{currentVerification?.transaction_type}</p>
        </div> */}
      </div>

      <div className="flex flex-1 space-x-3 text-[12px]">
        <div className="flex-[0.5]">
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Company Name :</p>
            <p>{currentVerification?.company_name}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Company Number :</p>
            <p>{currentVerification?.company_number}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Date registered :</p>
            <p>
              {currentVerification?.date_of_registration
                ? formatFullDateTime(currentVerification?.date_of_registration)
                : ""}
            </p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Specialization :</p>
            <p>{currentVerification?.specialization}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Business Email :</p>
            <p>{currentVerification?.metadata?.email}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Created At :</p>
            <p>{formatFullDateTime(currentVerification?.created_at)}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Location :</p>
            <p>{currentVerification?.metadata?.location}</p>
          </div>
        </div>
        <div className="flex-[0.5]">
          <p className="font-semibold">Business Logo </p>
          <img
            src={currentVerification?.business_logo}
            className="w-[200px] flex mx-auto h-[200px]"
          />
          <p className="font-semibold my-4">Business Document </p>
          <img
            src={currentVerification?.business_document}
            className="w-[300px] flex mx-auto h-[300px]"
          />
        </div>
      </div>

      {currentVerification?.kyb_status == "progress" && (
        <div className="flex space-x-2 mt-10">
          <button
            className="bg-orange-500 text-white w-full py-2 font-spacegrotesk"
            onClick={() =>
              dispatch(
                acceptOrRejectKybsAction({
                  business_id: currentVerification?.business_id,
                  choice: "failed",
                  setShowVerificationDetails: setShowVerificationDetails,
                  showVerificationDetails: showVerificationDetails,
                })
              )
            }
          >
            Reject Document
          </button>
          <button
            className="bg-green-500 text-white w-full py-2 font-spacegrotesk"
            onClick={() => {
              
              dispatch(
                acceptOrRejectKybsAction({
                  business_id: currentVerification?.business_id,
                  choice: "success",
                  setShowVerificationDetails: setShowVerificationDetails,
                  showVerificationDetails: showVerificationDetails,
                })
              );
            }}
          >
            Accept Document
          </button>
        </div>
      )}
    </div>
  );
};

export default VerificationDetails;
