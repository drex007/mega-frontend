import qs from "qs";

import { API } from "../axios.config";

export const adminLoginRoute = (formdata) => API.post("/auth/login", formdata);
export const getAdminDetailsRoute = () => API.get("/users/get-user");
export const getDashboardAnalyticsRoute = () =>
  API.get("/admin/dashboard-analytics");
export const getUsersRoute = () => API.get("/admin/get-users");
export const fetchTransactionsRoute = () => API.get("/bank/payments");
export const getTransactionByIDRoute = (id) => API.get(`/bank/payments/${id}`);
export const fetchAUserRoute = (id) => API.get(`/admin/fetch-user/${id}`);
export const getOrdersRoute = (status) =>
  API.get(`/admin/get-orders`, {
    params: {
      status: status,
    },
  });
export const getSingleOrdersRoute = (id) => API.get(`/order/get-order/${id}`);
export const addDeliveryAgentRoute = (id, formdata) =>
  API.post(`/order/add-delivery-agent/${id}`, formdata);
export const activateAndDeactivateUserRoute = (id, choice) =>
  API.get(`/admin/user/activate-deactivate/${id}/${choice}`);
export const fineAUsersRoute = (id, formdata) =>
  API.post(`/admin/user/fine/${id}`, formdata);
export const fetchBusinessKYCRoute = (status) =>
  API.get(`/admin/business-kycs`, { params: { status: status } });


export const acceptOrRejectKybsRoute = (business_id, choice) =>
  API.get(`/admin/verify-kyb/${business_id}/${choice}`);
export const updateAccountRoute = (formdata, id) =>
  API.put(`admin/account/update/${id}`, formdata);
export const updateNetworkRoute = (formdata, id) =>
  API.put(`admin/asset/update/${id}`, formdata);
export const updateTransactionFeeRoute = (formdata, id) =>
  API.put(`admin/fee/update/${id}`, formdata);
export const deleteNetworkAssetRoute = (id) =>
  API.delete(`admin/asset/delete/${id}`);
export const deleteAccountRoute = (id) =>
  API.delete(`admin/account/delete/${id}`);

export const getAdminAnalyticsRoute = () => API.get(`transaction/analytics`);
export const getTransactionsRoute = (
  page,
  limit,
  transactionStatus,
  transactionType,
  from,
  to
) =>
  API.get("/transaction/all", {
    params: {
      page: page,
      limit: limit,
      transactionStatus: transactionStatus,
      transactionType: transactionType,
      from: from,
      to: to,
    },
  });

export const getSwapRequestRoute = (
  page,
  limit,
  transactionStatus,
  transactionType
) => {
  return API.get("/transaction/all", {
    params: {
      page: page,
      limit: limit,
      transactionStatus:
        typeof transactionStatus === "string"
          ? transactionStatus
          : JSON.stringify(transactionStatus),
      transactionType: transactionType,
    },
  });
};

export const getAllUsersRoute = (page, limit) =>
  API.get("/user/all-users", {
    params: {
      page: page,
      limit: limit,
    },
  });

export const adminUpdateTransactionRoute = (formdata, transactionId) =>
  API.put(`/transaction/update/${transactionId}`, formdata);
