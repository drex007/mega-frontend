import qs from "qs";

import { API } from "../axios.config";

export const adminLoginRoute = (formdata) => API.post("/auth/login", formdata);
export const getAdminDetailsRoute = () => API.get("/users/get-user");
export const getDashboardAnalyticsRoute = () =>
  API.get("/admin/dashboard-analytics");
export const getUsersRoute = (page) =>
  API.get("/admin/get-users", {
    params: {
      page: page,
    },
  });


export const getAdminsRoute = (page) =>
  API.get("/admin/get-admins", {
    params: {
      page: page,
    },
  });

  export const makeAUserAdminRoute = (user_id, admin_option) =>
  API.get(`/admin/${user_id}/make-admin/${admin_option}`);

export const fetchTransactionsRoute = (page) =>
  API.get("/bank/payments", {
    params: {
      page: page,
    },
  });
export const getTransactionByIDRoute = (id) => API.get(`/bank/payments/${id}`);
export const fetchAUserRoute = (id) => API.get(`/admin/fetch-user/${id}`);
export const getOrdersRoute = (status, page) =>
  API.get(`/admin/get-orders`, {
    params: {
      status: status,
      page: page,
    },
  });
export const getSingleOrdersRoute = (id) => API.get(`/order/get-order/${id}`);
export const addDeliveryAgentRoute = (id, formdata) =>
  API.post(`/order/add-delivery-agent/${id}`, formdata);
export const activateAndDeactivateUserRoute = (id, choice) =>
  API.get(`/admin/user/activate-deactivate/${id}/${choice}`);
export const fineAUsersRoute = (id, formdata) =>
  API.post(`/admin/user/fine/${id}`, formdata);
export const fetchBusinessKYCRoute = (status, page) =>
  API.get(`/admin/business-kycs`, { params: { status: status, page: page } });

export const acceptOrRejectKybsRoute = (business_id, choice) =>
  API.get(`/admin/verify-kyb/${business_id}/${choice}`);
export const updateAccountRoute = (formdata, id) =>
  API.put(`admin/account/update/${id}`, formdata);

export const getUserTransactionRoute = (user_id, page) =>
  API.get(`/admin/payments/history/${user_id}`, {
    params: {
      page: page,
      page_size: 10,
    },
  });

export const getAdminFeeRoute = () => API.get("/admin/delivery-charge");

export const updateAdminFeeRoute = (formdata) =>
  API.put(`admin/delivery-charge`, formdata);

export const adminDisbursePaymentRoute = (order_id) =>
  API.get(`admin/order/${order_id}/disburse`);

export const getAllUsersRoute = (page, limit) =>
  API.get("/user/all-users", {
    params: {
      page: page,
      limit: limit,
    },
  });

