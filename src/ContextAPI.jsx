import React, { useState } from "react"
export const AppContext = React.createContext();
import {dashBoard} from "./config/adminConfig"
export const AppContextProvider = ({ children }) => {


    const [showContactForm, setShowContactForm] = useState(false)
    const [AdminPage, setAdminPage] = useState(dashBoard)

  
    return (

        <>
            <AppContext.Provider value={{
            
                showContactForm,
                setShowContactForm,
                AdminPage,
                setAdminPage
        

            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}