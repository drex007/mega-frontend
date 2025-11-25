import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatFullDateTime } from "../../constants";
import {
  fetchAUserRouteAction,
  fetchBusinessKYCAction,
} from "../../Api/admin/admin.api";
import { BsSearch } from "react-icons/bs";
import { AppContext } from "../../ContextAPI";
import VerificationDetails from "./VerificationDetails";

const Verifications = () => {
  const { business_kyc } = useSelector((state) => state.admin);

  const [formdata, setFormdata] = useState({
    user_id: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {   currentVerification, setCurrentVerification } = useContext(AppContext);
  const [showVerificationDetails, setShowVerificationDetails] = useState(false)

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const [currentTab, setCurrentTab] = useState(0);
  const [kycStatus, setKycStatus] = useState("progress");

  useEffect(() => {
    dispatch(fetchBusinessKYCAction({ status: kycStatus }));
  }, [kycStatus]);

  return (
    <div className="p-4 w-full">
      {!showVerificationDetails && (
        <div className="flex justify-between">
        <div>
          <p>Verifications</p>
        </div>
        <div className="border px-4">
          <div className="flex space-x-2 items-center">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="user_id"
              placeholder="Enter user or mega id"
              id=""
              className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light text-[12px]"
            />
            <BsSearch
              className="cursor-pointer"
              onClick={() =>
                dispatch(fetchAUserRouteAction({ status: formdata.user_id }))
              }
            />
          </div>
        </div>
      </div>
      )}

     {!showVerificationDetails && ( <div className="my-10 text-[14px]">
        <div className="grid grid-cols-2  justify-between py-4">
          <p
            onClick={() => {
              setKycStatus("progress");
              setCurrentTab(0);
            }}
            className={`${
              currentTab == 0
                ? "bg-green-500 text-white"
                : "bg-transparent text-black"
            } w-ful py-2 flex justify-center cursor-pointer border`}
          >
            Pending
          </p>
          <p
            onClick={() => {
              setKycStatus("success");
              setCurrentTab(1);
            }}
            className={`${
              currentTab == 1
                ? "bg-green-500 text-white"
                : "bg-transparent text-black"
            } w-ful py-2 flex justify-center cursor-pointer border`}
          >
            Verified
          </p>
        </div>
      
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="bg-neutral-secondary-soft border-b border-default text-[12px]">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium"></th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Company Number
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Company Type
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Date registered
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {business_kyc?.business_kycs?.map((e, i) => (
                <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft" key={i}>
                   <td class="px-6 py-4">{i+1}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {e?.company_name}
                  </th>
                  <td class="px-6 py-4">{e?.company_number}</td>
                  <td class="px-6 py-4">{e?.company_type}</td>
                  <td class="px-6 py-4">
                    {e?.date_of_registration
                      ? formatFullDateTime(e?.date_of_registration)
                      : "N/A"}
                  </td>
                  <td class="px-6 py-4 flex space-x-2">
                    {/* <button className="bg-green-500 p-2 text-[12px] text-white">
                    Add agent
                  </button> */}
                    {/* <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate user</button> */}
                    <button className="bg-blue-500 p-2 text-[12px] text-white"
                    onClick={()=>{
                      setCurrentVerification(e)
                      setShowVerificationDetails(!showVerificationDetails)
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
      </div>)}

      {showVerificationDetails && <VerificationDetails  showVerificationDetails ={showVerificationDetails} setShowVerificationDetails={setShowVerificationDetails}/>}
    </div>
  );
};

export default Verifications;
