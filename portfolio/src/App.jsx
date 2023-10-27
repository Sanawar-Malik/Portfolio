import './App.css'
import { Experience } from './Components/Experience'
import { Header } from './Components/Header'
import { Nav } from './Components/Nav'
import { Project } from './Components/Project'
import { Service } from './Components/Service'


function App() {

  return (
    <div className='bg-[#0d1137] '>
      <Nav />
      <Header />
      <Service />
      <Project />
      <Experience />

    </div>
  )
}

export default App
