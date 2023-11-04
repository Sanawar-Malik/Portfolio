import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Login } from 'heroicons-react'
import { Project } from './Components/Project'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route
          exact
          path="/login"
          element={!access_token ? <Login /> : <Navigate to="/admin" />}
        />
        <Route
          exact
          path="/admin"
          element={access_token ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
