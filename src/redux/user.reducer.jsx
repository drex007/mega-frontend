import { createSlice } from '@reduxjs/toolkit'
// import { dojahKycAction, getExchangeRateAction, getFeeAction, getTransactionByTransctionIDAction, getUserKycStatusAction, setUserKycStatusToNull, userBuyCryptocurrencyAction, userFetchAdminAccountsAction, userFetchNetworkAction, userSellCryptocurrencyAction } from '../Api/user/user.api'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    exchangeRate: false,
 
  },
  reducers: {},
  extraReducers: (builder) => {
    //User Exhcnage rate
    // builder.addCase(getExchangeRateAction.pending, (state, action) => {
    //   state.exchangeRate = true
    // })
    // builder.addCase(getExchangeRateAction.fulfilled, (state, action) => {
    //   state.exchangeRate = action.payload
    // })
    // builder.addCase(getExchangeRateAction.rejected, (state, action) => {
    //   state.exchangeRate = false
    // })

    // //USers Fee
    // builder.addCase(getFeeAction.pending, (state, action) => {
    //   state.usersFee = true
    // })
    // builder.addCase(getFeeAction.fulfilled, (state, action) => {
    //   state.usersFee = action.payload
    // })
    // builder.addCase(getFeeAction.rejected, (state, action) => {
    //   state.usersFee = false
    // })

    //UserKYC
    // builder.addCase(dojahKycAction.pending, (state, action) => {
    //   state.kycData = "loading"
    // })

    // builder.addCase(dojahKycAction.fulfilled, (state, action) => {

    //   state.kycData = action.payload
    // })
    // builder.addCase(dojahKycAction.rejected, (state, action) => {

    //   state.kycData = null
    // })

 






  }

})



export default userSlice.reducer