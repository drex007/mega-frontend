import { createSlice } from '@reduxjs/toolkit'
import { addAccountAction, addNetworkAssetAction,adminGetDashboardAnalyticsAction, adminDeleteAccountAction, adminDeleteNetworkAssetAction, adminLoginAction, adminUpdateTransactionAction, fetchNetworksAction, getAdminAnalyticsAction, getAdminDetailsAction, getAllUsersAction, getSwapRequestAction, getTransactionsActions, updateAccountAction, updateNetworkAction, updateTransactionFeeAction } from '../Api/admin/admin.api'


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    authLoading: false,
    current_admin: null,
    dashboard_analytics:null

  },
  reducers: {},
  extraReducers: (builder) => {
    //Admin Login

    builder.addCase(adminLoginAction.pending, (state, action) => {
      state.authLoading = true
    })
    builder.addCase(adminLoginAction.fulfilled, (state, action) => {
      state.authLoading = false
      state.authData = action.payload
    })
    builder.addCase(adminLoginAction.rejected, (state, action) => {
      state.authLoading = false
    })

    //Admin Gets Account
    builder.addCase(getAdminDetailsAction.fulfilled, (state, action) => {
      state.current_admin = action.payload
    })


    //Delete Account

    builder.addCase(adminGetDashboardAnalyticsAction.fulfilled, (state, action) => {
      state.dashboard_analytics = action.payload
    })






  }

})



export default adminSlice.reducer