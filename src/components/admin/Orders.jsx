import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersAction,
  getSingleOrderAction,
} from "../../Api/admin/admin.api";
import { formatFullDateTime } from "../../constants";
import { AppContext } from "../../ContextAPI";
import { addDeliveryAgent } from "../../config/adminConfig";
import { BsSearch } from "react-icons/bs";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const {
    AdminPage,
    setAdminPage,
    modalConfig,
    setModalConfig,
    currentOrder,
    setCurrentOrder,
  } = useContext(AppContext);

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.admin);
  const [status, setStatus] = useState("DELIVERED");
  const [seeOrderDetails, setSeeOrderDetails] = useState(false);
  const [formdata, setFormdata] = useState({
    order_id: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getOrdersAction({ status: status }));
  }, [status, formdata]);

  return (
    <div className="p-4 w-full">
    {!seeOrderDetails && (  <div className="flex justify-between">
        <div>
          <p>Orders</p>
        </div>
        <div className="border px-4">
          <div className="flex space-x-2 items-center">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="order_id"
              placeholder="Enter order id or mega id"
              id=""
              className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light text-[12px]"
            />
            <BsSearch
              className="cursor-pointer"
              onClick={() =>
                dispatch(getSingleOrderAction({ id: formdata.order_id }))
              }
            />
          </div>
        </div>
      </div>)}

      {!seeOrderDetails && (
        <div className="my-10 text-[14px]">
          <div className="grid grid-cols-3 justify-between py-4">
            <p
              onClick={() => {
                setStatus("DELIVERED");
                setCurrentTab(0);
              }}
              className={`${
                currentTab == 0
                  ? "bg-green-500 text-white"
                  : "bg-transparent text-black"
              } w-ful py-2 flex justify-center cursor-pointer`}
            >
              Delivered
            </p>
            <p
              onClick={() => {
                setStatus("IN_ROUTE");
                setCurrentTab(1);
              }}
              className={`${
                currentTab == 1
                  ? "bg-green-500 text-white"
                  : "bg-transparent text-black"
              } w-ful py-2 flex justify-center cursor-pointer`}
            >
              In Route
            </p>
            <p
              onClick={() => {
                setStatus("PROCESSING");
                setCurrentTab(2);
              }}
              className={`${
                currentTab == 2
                  ? "bg-green-500 text-white"
                  : "bg-transparent text-black"
              } w-ful py-2 flex justify-center cursor-pointer`}
            >
              Processing
            </p>
          </div>
          <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table class="w-full text-sm text-left rtl:text-right text-body">
              <thead class="bg-neutral-secondary-soft border-b border-default text-[12px]">
                <tr>
                  <th scope="col" class="px-6 py-3 font-medium"></th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Order ID
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Date Ordered
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Delivery contact
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {orders?.orders?.map((e, i) => (
                  <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
                    <td class="px-6 py-4">{i + 1}</td>
                    <td class="px-6 py-4">{e?.mega_id}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      {e?.created_at
                        ? formatFullDateTime(e?.created_at)
                        : "N/A"}
                    </th>
                    <td class="px-6 py-4">{e?.status}</td>
                    <td class="px-6 py-4">{e?.phone_number}</td>
                    <td class="px-6 py-4 flex space-x-2">
                      {status == "PROCESSING" && (
                        <button
                          className="bg-green-500 p-2 text-[12px] text-white"
                          onClick={() => {
                            setCurrentOrder(e);
                            setModalConfig(addDeliveryAgent);
                          }}
                        >
                          Add agent
                        </button>
                      )}
                      {/* <button className="bg-orange-500 p-2 text-[12px] text-white">Deactivate user</button> */}
                      <button
                        className="bg-blue-500 p-2 text-[12px] text-white"
                        onClick={() => {
                          setSeeOrderDetails(!seeOrderDetails);
                          setCurrentOrder(e);
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
      {seeOrderDetails && <OrderDetails currentOrder={currentOrder} setSeeOrderDetails ={setSeeOrderDetails} seeOrderDetails={ seeOrderDetails} />}
    </div>
  );
};

export default Orders;
