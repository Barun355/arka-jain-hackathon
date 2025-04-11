import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'
import Mentor from './pages/dashboards/mentor/page'
import Mentee from './pages/dashboards/mentee/page'
import DashboardLayout from './pages/dashboards/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'mentor',
        element: <Mentor />
      },
      {
        path: 'mentee',
        element: <Mentee />
      }
    ]
  }  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
