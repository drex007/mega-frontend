import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../ContextAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateAdminFeeAction,
} from "../../Api/admin/admin.api";

const UpdateAdminFeesModal = () => {
  const {

    setModalConfig,
  
  } = useContext(AppContext);
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    service_charge: "",
    delivery_fee: "",
  });

  const { admin_fees } = useSelector((state) => state.admin);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormdata({
      ...formdata,
      service_charge: admin_fees?.service_charge,
      delivery_fee: admin_fees?.delivery_fee,
    });
  }, []);

  return (
    <div className="fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk">
      <div className="bg-white shadow-2xl min-h-[200px] rounded-md w-2/6 p-4">
        <p className="font-spacegrotesk my-3 ">Update Admin Fee</p>

        <p className="text-[12px] font-semibold">Service Charge</p>
        <div className="w-full flex border border-gray-400 p-2 my-2 rounded-md">
          <input
            type="number"
            name="service_charge"
            id=""
            value={formdata?.service_charge}
            className="outline-none  w-full text-[12px]"
            placeholder="Service Charge"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <p className="text-[12px] font-semibold">Delivery Fee</p>
        <div className="w-full flex border border-gray-400 p-2 my-2 rounded-md">
          <input
            type="number"
            name="delivery_fee"
            id=""
            value={formdata?.delivery_fee}
            className="outline-none  w-full text-[12px]"
            placeholder="Delivery Fee"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex justify-end     space-x-2 my-3">
          <button
            className="font-african text-black border border-green-500  text-[10px] bg-white p-2 rounded-sm capitalize"
            onClick={() => setModalConfig(null)}
          >
            Cancel
          </button>
          <button
            className="font-african text-white text-[10px] bg-green-500 p-2 rounded-sm capitalize"
            onClick={() =>
            {
                dispatch(
                UpdateAdminFeeAction({
                  formdata: formdata,
                  setModalConfig: setModalConfig,
                })
              )

      
            }
            }
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdminFeesModal;
