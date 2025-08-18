import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';

import {HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div>

       <HelmetProvider>
        <RouterProvider router={router} />
       </HelmetProvider>

     </div>
  </StrictMode>,
)
