import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicesPages from "./pages/ServicesPages";
import ContactPage from "./pages/ContactPage";
import { DotLoader } from "react-spinners";
import  { Toaster } from 'react-hot-toast';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {

    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 300); // small delay for smooth fade
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {!isLoaded &&
        <div className="flex justify-center items-center min-h-screen">
          <DotLoader

            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }

      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: isLoaded ? "auto" : "none",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/services" element={<ServicesPages />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
