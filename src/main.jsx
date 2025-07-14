import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './ContextAPI.jsx'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <HelmetProvider>
          <App />
          <Toaster position='top-right' />
        </HelmetProvider>
      </AppContextProvider>
    </Provider>

  </StrictMode>
)
