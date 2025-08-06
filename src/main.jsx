import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div>

      <RouterProvider router={router} />

     </div>
  </StrictMode>,
)
