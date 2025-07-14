import React, { useState } from "react"
export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {


    const [showContactForm, setShowContactForm] = useState(false)

  
    return (

        <>
            <AppContext.Provider value={{
            
                showContactForm,
                setShowContactForm
        

            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}