import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './Components/Login.jsx'
import { Header } from './Components/Header.jsx'
import { Project } from './Components/Project.jsx'
import { Service } from './Components/Service.jsx'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
})

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<App />} />
    <Route path='/login' element={<Login />} />
    <Route path='/projects/:projectId' element={<Project />} />


  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
