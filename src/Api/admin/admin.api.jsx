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
  updateTransactionFeeRoute,
  activateAndDeactivateUserRoute,
  fineAUsersRoute,
  fetchAUserRoute,
  getOrdersRoute,
  addDeliveryAgentRoute,
  getSingleOrdersRoute,
  fetchBusinessKYCRoute,
  acceptOrRejectKybsRoute,
  getUserTransactionRoute,
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
  async ({page}, thunkAPI) => {
    try {
      const { data } = await getUsersRoute(page);
      return data;
    } catch (error) {
      return {};
    }
  }
);

export const fetchPaymentHistoriesAction = createAsyncThunk(
  "admin/fetchPaymentHistories",
  async ({page}, thunkAPI) => {
    try {
      const { data } = await fetchTransactionsRoute(page);
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
  async ({ status, page }, thunkAPI) => {
    try {
      const { data } = await getOrdersRoute(status, page);

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
  async ({ id, formdata, setModalConfig }, thunkAPI) => {
    try {
      if (!formdata.name || !formdata.contact_detail)
        return toast.error("Agent name and contact required");
      const { data } = await addDeliveryAgentRoute(id, formdata);
      toast.success("Agent added successfully");
      setModalConfig(null);
      return data;
    } catch (error) {
      toast.error("Error occurred, try again");
      return {};
    }
  }
);

export const fetchBusinessKYCAction = createAsyncThunk(
  "admin/fetchBusinessKYCAction",
  async ({ status, page }, thunkAPI) => {
    try {
      const { data } = await fetchBusinessKYCRoute(status, page);

      return data;
    } catch (error) {
      return {};
    }
  }
);

export const acceptOrRejectKybsAction = createAsyncThunk(
  "admin/acceptOrRejectKybsAction",
  async (
    {
      business_id,
      choice,
      setShowVerificationDetails,
      showVerificationDetails,
    },
    thunkAPI
  ) => {
    try {
      const { data } = await acceptOrRejectKybsRoute(business_id, choice);
      if (choice == "success") {
        toast.success("Verification documents accepted");
        setShowVerificationDetails(!showVerificationDetails);
      } else {
        toast.success("Verification documents rejected");
      }

      return data;
    } catch (error) {
      toast.error("Error occured while processing verification");

      return {};
    }
  }
);






export const getUserTransactionAction = createAsyncThunk(
  "admin/getUserTransactionAction",
  async (
    { page, user_id },
    thunkAPI
  ) => {
    try {
      const { data } = await getUserTransactionRoute(
        user_id,
        page,
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




