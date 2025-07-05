import React, { useState } from "react"
export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {


    const [userModalState, setUserModalState] = useState("")

    const [transactionFormData, setTransactionFormData] = useState(
        {
            email: "",

        }

    )
    return (

        <>
            <AppContext.Provider value={{
                userModalState,
        

            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}