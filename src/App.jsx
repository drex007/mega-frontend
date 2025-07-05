import { useContext, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
function App() {

  return (
    //Added comments

    <BrowserRouter>

      <Routes>

        <Route index element={

          <LandingPage />


        } />

        {/* <Route path='/admin' element={

          <AdminPage />

        } />

        <Route path='/login' element={

          <LoginPage />

        } /> */}

      </Routes>
    </BrowserRouter>

  )



}

export default App


