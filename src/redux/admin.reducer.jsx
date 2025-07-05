import { createSlice } from '@reduxjs/toolkit'
// import { addAccountAction, addNetworkAssetAction, adminDeleteAccountAction, adminDeleteNetworkAssetAction, adminGetAccountAction, adminGetFeeAction, adminLoginAction, adminUpdateTransactionAction, fetchNetworksAction, getAdminAnalyticsAction, getAllUsersAction, getSwapRequestAction, getTransactionsActions, updateAccountAction, updateNetworkAction, updateTransactionFeeAction } from '../Api/admin/admin.api'


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    authLoading: false,

  },
  reducers: {},
  extraReducers: (builder) => {
    //Admin Login

    // builder.addCase(adminLoginAction.pending, (state, action) => {
    //   state.authLoading = true
    // })
    // builder.addCase(adminLoginAction.fulfilled, (state, action) => {
    //   state.authLoading = false
    //   state.authData = action.payload
    // })
    // builder.addCase(adminLoginAction.rejected, (state, action) => {
    //   state.authLoading = false
    // })

    // //Admin Gets Account
    // builder.addCase(adminGetAccountAction.fulfilled, (state, action) => {
    //   state.adminAccounts = action.payload
    // })


    //Delete Account

    // builder.addCase(adminDeleteAccountAction.pending, (state, action) => {
    //   state.deleteAccount = null
    // })


    // builder.addCase(adminDeleteAccountAction.fulfilled, (state, action) => {
    //   state.deleteAccount = action.payload
    // })

    // builder.addCase(adminDeleteAccountAction.rejected, (state, action) => {
    //   state.deleteAccount = null
    // })






  }

})



export default adminSlice.reducer