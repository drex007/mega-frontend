import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import {
  getTransactionByIDRoute,
  fetchTransactionsRoute,
  adminLoginRoute,
  adminUpdateTransactionRoute,
  deleteAccountRoute,
  deleteNetworkAssetRoute,
  getAdminDetailsRoute,
  getAdminAnalyticsRoute,
  getAllUsersRoute,
  getUsersRoute,
  getSwapRequestRoute,
  getDashboardAnalyticsRoute,
  getTransactionsRoute,
  updateAccountRoute,
  updateNetworkRoute,
  updateTransactionFeeRoute,
  activateAndDeactivateUserRoute,
  fineAUsersRoute,
  fetchAUserRoute,
  getOrdersRoute,
  addDeliveryAgentRoute,
  getSingleOrdersRoute,
  fetchBusinessKYCRoute,
} from "./routes";
import toast from "react-hot-toast";

export const adminLoginAction = createAsyncThunk(
  "admin/LoginAction",
  async ({ formdata, navigate }, { rejectWithValue }) => {
    try {
      if (!formdata.email || !formdata.password)
        return toast.error("Email and password required");
      const { data } = await adminLoginRoute(formdata);
      localStorage.setItem("user", `Bearer ${data.access_token}`);

      toast.success("Admin login success");
      navigate("/dashboard", { replace: true });

      return {
        status: true,
      };
    } catch (error) {
      toast.error("Admin login failed");
      return {
        status: false,
      };
    }
  }
);

export const getAdminDetailsAction = createAsyncThunk(
  "admin/getAdminDetails",
  async ({ navigate }, thunkAPI) => {
    try {
      const { data } = await getAdminDetailsRoute();

      if (data?.is_admin == false) {
        toast.error("This user not an admin");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
      }
      return data;
    } catch (error) {
      return {};
    }
  }
);
export const adminGetDashboardAnalyticsAction = createAsyncThunk(
  "admin/getDashboardAnalytics",
  async (_, thunkAPI) => {
    try {
      const { data } = await getDashboardAnalyticsRoute();
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getUsersRouteAction = createAsyncThunk(
  "admin/getUsersRouteAction",
  async (_, thunkAPI) => {
    try {
      const { data } = await getUsersRoute();
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const fetchPaymentHistoriesAction = createAsyncThunk(
  "admin/fetchPaymentHistories",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchTransactionsRoute();
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getTransactionByIDAction = createAsyncThunk(
  "admin/getTransactionByIDAction",
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await getTransactionByIDRoute(id);

      return data;
    } catch (error) {
      return {};
    }
  }
);

export const activateAndDeactivateUserAction = createAsyncThunk(
  "admin/activateAndDeactivateUserAction",
  async ({ id, choice }, thunkAPI) => {
    try {
      const { data } = await activateAndDeactivateUserRoute(id, choice);
      toast.success(`user ${choice}d successfully`);

      return data;
    } catch (error) {
      toast.error("Error occured try again!!");
      return {};
    }
  }
);

export const fineAUserAction = createAsyncThunk(
  "admin/fineAUserAction",
  async ({ id, formdata }, thunkAPI) => {
    try {
      if (!id || formdata?.amount <= 0) {
        return toast.error(
          "Amount must be greater than zero and user id is requied"
        );
      }

      const { data } = await fineAUsersRoute(id, formdata);
      toast.success(`user fined successfully`);

      return data;
    } catch (error) {
      toast.error("Error occured try again!!");
      return {};
    }
  }
);
export const fetchAUserRouteAction = createAsyncThunk(
  "admin/fetchAUserRouteAction",
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await fetchAUserRoute(id);

      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getOrdersAction = createAsyncThunk(
  "admin/getOrdersAction",
  async ({ status }, thunkAPI) => {
    try {
    
      const { data } = await getOrdersRoute(status);

      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getSingleOrderAction = createAsyncThunk(
  "admin/getSingleOrderAction",
  async ({ id }, thunkAPI) => {
    try {
    
      const { data } = await getSingleOrdersRoute(id);

      return data;
    } catch (error) {
      return {};
    }
  }
);


export const addDeliveryAgentAction = createAsyncThunk(
  "admin/addDeliveryAgentAction",
  async ({id, formdata,setModalConfig}, thunkAPI) => {
    try {
      if (
        !formdata.name ||
        !formdata.contact_detail 
      
      )
        return toast.error(
          "Agent name and contact required"
        );
      const { data } = await addDeliveryAgentRoute(id,formdata,);
      toast.success("Agent added successfully");
      setModalConfig(null);
      return data
    } catch (error) {
      toast.error("Error occurred, try again");
      return {};
    }
  }
);


export const fetchBusinessKYCAction = createAsyncThunk(
  "admin/fetchBusinessKYCAction",
  async ({status}, thunkAPI) => {
    try {
      
      const { data } = await fetchBusinessKYCRoute(status);
    
      return data
    } catch (error) {
      
      return {};
    }
  }
);


export const updateNetworkAction = createAsyncThunk(
  "admin/updateNetworkAction",
  async (formdata, thunkAPI) => {
    try {
      if (
        !formdata.assetName ||
        !formdata.walletAddress ||
        !formdata.networkName
      )
        return toast.error("Asset, WalletAddress and Network required");
      const { data } = await updateNetworkRoute(formdata, formdata.id);
      toast.success("Asset updated successfully");
      formdata.setAdminDashBoardModal(null);
      return data.data;
    } catch (error) {
      toast.error("Action failed, try again");
      return {};
    }
  }
);

export const updateTransactionFeeAction = createAsyncThunk(
  "admin/updateTransactionFeeAction",
  async (formdata, thunkAPI) => {
    try {
      if (!formdata.fee) return toast.error("Fee is required");
      const { data } = await updateTransactionFeeRoute(formdata, formdata.id);
      toast.success("Fee updated successfully");
      formdata.setAdminDashBoardModal(null);
      return data.data;
    } catch (error) {
      toast.error("Action failed, try again");
      return {};
    }
  }
);

export const getAdminAnalyticsAction = createAsyncThunk(
  "admin/getAdminAnalyticsAction",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAdminAnalyticsRoute();
      return data.data;
    } catch (error) {
      return {};
    }
  }
);

export const getTransactionsActions = createAsyncThunk(
  "admin/getTransactionsActions",
  async (
    { page, limit, transactionStatus, transationType, from, to },
    thunkAPI
  ) => {
    try {
      const { data } = await getTransactionsRoute(
        page,
        limit,
        transactionStatus,
        transationType,
        from,
        to
      );
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getSwapRequestAction = createAsyncThunk(
  "admin/getSwapRequestAction",
  async ({ page, limit, transactionStatus, transationType }, thunkAPI) => {
    try {
      const { data } = await getSwapRequestRoute(
        page,
        limit,
        transactionStatus,
        transationType
      );
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const getAllUsersAction = createAsyncThunk(
  "admin/getAllUsersAction",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await getAllUsersRoute(page, limit);
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const adminUpdateTransactionAction = createAsyncThunk(
  "admin/adminUpdateTransactionAction",
  async ({ formdata, transactionId }, thunkAPI) => {
    try {
      if (!transactionId) return toast.error("Transaction ID is required");
      const { data } = await adminUpdateTransactionRoute(
        formdata,
        transactionId
      );
      toast.success("Transaction updated successfully");
      formdata.setAdminDashBoardModal(null);
      return data.data;
    } catch (error) {
      toast.error("Action failed, try again");
      return {};
    }
  }
);

export const adminDeleteNetworkAssetAction = createAsyncThunk(
  "admin/adminDeleteNetworkAssetAction",
  async (formdata, thunkAPI) => {
    try {
      const { data } = await deleteNetworkAssetRoute(formdata?.id);
      toast.success("Asset deleted successfully");
      formdata.setAdminDashBoardModal(null);
      return data.data;
    } catch (error) {
      toast.error("Action failed, try again");
      return {};
    }
  }
);

export const adminDeleteAccountAction = createAsyncThunk(
  "admin/adminDeleteAccountAction",
  async (formdata, thunkAPI) => {
    try {
      const { data } = await deleteAccountRoute(formdata?.id);
      toast.success("Account deleted successfully");
      formdata.setAdminDashBoardModal(null);
      return data.data;
    } catch (error) {
      toast.error("Action failed, try again");
      return {};
    }
  }
);
