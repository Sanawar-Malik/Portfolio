
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Login } from './Components/Login'
import { Projects } from './Components/Projects'
import { Nav } from './Components/Nav'
import { Header } from './Components/Header'
import { Service } from './Components/Service'


function App() {

  return (
    <div className='bg-gradient-to-bl from-fuchsia-100 to-green-100'>
      <Nav />
      <Header />
      <Projects />
      <Service />

    </div>
  )
}

export default App
