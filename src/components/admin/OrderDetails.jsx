import React from "react";
import { formatCurrency, formatFullDateTime } from "../../constants";

const OrderDetails = ({
  currentOrder,
  seeOrderDetails,
  setSeeOrderDetails,
}) => {
  return (
    <div className="min-h-[500px] shadow-lg  p-8 overflow-y-scroll ">
      <div className="flex justify-between">
        <div>Order Details</div>
        <div
          className="bg-red-500 rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer"
          onClick={() => {
            setSeeOrderDetails(!seeOrderDetails);
          }}
        >
          <p className="text-white">x</p>
        </div>
      </div>
      <div className="flex flex-1 space-x-3 text-[12px]">
        <div className="flex-[0.5]">
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>User ID :</p>
            <p>{currentOrder?.user_id}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Order ID :</p>
            <p>{currentOrder?.order_id}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Mega ID :</p>
            <p>{currentOrder?.mega_id}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Delivery method:</p>
            <p>{currentOrder?.delivery}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Total cost :</p>
            <p>{currentOrder?.total_cost ? formatCurrency(currentOrder?.total_cost, "NGN"): ""}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Set Time And Appointment Date :</p>
            <p>{currentOrder?.set_time} || {currentOrder?.appointment_date}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Created At :</p>
            <p>{formatFullDateTime(currentOrder?.created_at)}</p>
          </div>
        </div>
        <div className="flex-[0.5]">
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Phone Number :</p>
            <p>{currentOrder?.phone_number}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Delivery Address:</p>
            <p>{currentOrder?.delivery_address}</p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Delivery Agent Details :</p>
            <p>Name : {currentOrder?.delivery_agent_details?.name}</p>
            <p>
              Phone number :{" "}
              {currentOrder?.delivery_agent_details?.contact_detail}
            </p>
          </div>
          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Items :</p>
            <div className="ml-2">
              {currentOrder?.item_details?.map((e, i) => (
                <div className="my-2">
                  <p>Name: {e?.name}</p>
                  <p>Sub-category: {e?.subcategory}</p>
                  <p>Category: {e?.category}</p>
                  <p>Price: {e?.price}</p>
                  <p>Quantity: {e?.quantity}</p>
                  <p>Item type: {e?.item_type}</p>
                  <p>Location : {e?.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-2 bg-gray-100 p-2 rounded-sm">
            <p>Fee :</p>
            <p>{currentOrder?.delivery_fee ? formatCurrency(currentOrder?.delivery_fee, "NGN"): ""}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
