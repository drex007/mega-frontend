import qs from 'qs'



import { API } from "../axios.config";

export const adminLoginRoute = (formdata) => API.post('/auth/login', formdata)
export const getAdminDetailsRoute = () => API.get('/users/get-user')
export const getDashboardAnalyticsRoute = () => API.get('/admin/dashboard-analytics')
export const getUsersRoute = () => API.get('/admin/get-users')
export const fetchTransactionsRoute = () => API.get('/bank/payments')
export const getTransactionByIDRoute = (id) => API.get(`/bank/payments/${id}`)
export const updateAccountRoute = (formdata, id) => API.put(`admin/account/update/${id}`, formdata)
export const updateNetworkRoute = (formdata, id) => API.put(`admin/asset/update/${id}`, formdata)
export const updateTransactionFeeRoute = (formdata, id) => API.put(`admin/fee/update/${id}`, formdata)
export const deleteNetworkAssetRoute = (id) => API.delete(`admin/asset/delete/${id}`)
export const deleteAccountRoute = (id) => API.delete(`admin/account/delete/${id}`)


export const getAdminAnalyticsRoute = () => API.get(`transaction/analytics`)
export const getTransactionsRoute = (page, limit, transactionStatus, transactionType, from, to) => API.get('/transaction/all', {
    params: {
        page: page,
        limit: limit,
        transactionStatus: transactionStatus,
        transactionType: transactionType,
        from:from,
        to:to

    }
})


export const getSwapRequestRoute = (page, limit, transactionStatus, transactionType) => {
    return API.get('/transaction/all', {
        params: {
            page: page,
            limit: limit,
            transactionStatus: typeof(transactionStatus) === "string" ? transactionStatus : JSON.stringify(transactionStatus),
            transactionType: transactionType

        }
    })
}


export const getAllUsersRoute = (page, limit) => API.get('/user/all-users', {
    params: {
        page: page,
        limit: limit
    }
})

export const adminUpdateTransactionRoute = (formdata, transactionId) => API.put(`/transaction/update/${transactionId}`, formdata)