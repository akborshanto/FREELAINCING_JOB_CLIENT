import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import './index.css'
import AuthProviders from './firebase/AuthContext/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>



  <AuthProviders>
  <RouterProvider router={router}></RouterProvider>

  <ToastContainer />
  </AuthProviders>



  </React.StrictMode>,
)
