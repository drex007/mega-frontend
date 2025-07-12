import { useContext, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ServicesPages from './pages/ServicesPages';
function App() {

  return (
    //Added comments

    <BrowserRouter>

      <Routes>

        <Route index element={

          <LandingPage />


        } />

        <Route path='/services' element={

          <ServicesPages />

        } />

        {/* <Route path='/login' element={

          <LoginPage />

        } /> */}

      </Routes>
    </BrowserRouter>

  )



}

export default App


