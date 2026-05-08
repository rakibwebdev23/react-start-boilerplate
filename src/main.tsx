import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Bounce, ToastContainer } from 'react-toastify'
import { persistor, store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
          transition={Bounce}
        />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
