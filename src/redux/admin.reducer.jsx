import { createSlice } from '@reduxjs/toolkit'
import { getTransactionByIDAction, fetchPaymentHistoriesAction,getUsersRouteAction,adminGetDashboardAnalyticsAction, adminDeleteAccountAction, adminDeleteNetworkAssetAction, adminLoginAction, adminUpdateTransactionAction, getAdminAnalyticsAction, getAdminDetailsAction, getAllUsersAction, getSwapRequestAction, getTransactionsActions, updateAccountAction, updateNetworkAction, updateTransactionFeeAction, activateAndDeactivateUserAction, fineAUserAction, fetchAUserRouteAction } from '../Api/admin/admin.api'


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    authLoading: false,
    current_admin: null,
    dashboard_analytics:null,
    usersObject:null,
    payment_histories:null,
    payment_history_by_id:null,
    payment_history_by_id_loading:null

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


    //Fetch Dashboars analytiscs 

    builder.addCase(adminGetDashboardAnalyticsAction.fulfilled, (state, action) => {
      state.dashboard_analytics = action.payload
    })

    builder.addCase(fetchAUserRouteAction.fulfilled, (state, action) => {
      state.usersObject = action.payload
    })

     builder.addCase(getUsersRouteAction.fulfilled, (state, action) => {
      state.usersObject = action.payload
    })

    builder.addCase(fetchPaymentHistoriesAction.fulfilled, (state, action) => {
      state.payment_histories = action.payload
    })
    
    // Get Single Transaction BY ID
    builder.addCase(getTransactionByIDAction.pending, (state, action) => {
      state.payment_history_by_id_loading = true
    })
    builder.addCase(getTransactionByIDAction.fulfilled, (state, action) => {
      state.payment_history_by_id_loading = false
      state.payment_histories = action.payload
    })
    builder.addCase(getTransactionByIDAction.rejected, (state, action) => {
      state.payment_history_by_id_loading = false
    })

      //Activate And Deativate User
    builder.addCase(activateAndDeactivateUserAction.fulfilled, (state, action) => {
      // state.payment_history_by_id_loading = false
    })

    //Fine A User
    builder.addCase(fineAUserAction.fulfilled, (state, action) => {
      // state.payment_history_by_id_loading = false
    })


    






  }

})



export default adminSlice.reducer