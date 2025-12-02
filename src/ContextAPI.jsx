import React, { useState } from "react";
export const AppContext = React.createContext();
import { dashBoard } from "./config/adminConfig";
export const AppContextProvider = ({ children }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [AdminPage, setAdminPage] = useState(dashBoard);
  const [modalConfig, setModalConfig] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [currentVerification, setCurrentVerification] = useState(null);
  const [currentUserTransaction, setCurrentUserTransaction] = useState(null)

  return (
    <>
      <AppContext.Provider
        value={{
          showContactForm,
          setShowContactForm,
          AdminPage,
          setAdminPage,
          modalConfig,
          setModalConfig,
          currentUser,
          setCurrentUser,
          currentOrder,
          setCurrentOrder,
          currentVerification,
          setCurrentVerification,
          currentUserTransaction,
          setCurrentUserTransaction
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
