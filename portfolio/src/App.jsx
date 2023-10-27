import './App.css'
import { Header } from './Components/Header'
import { Nav } from './Components/Nav'
import { Project } from './Components/Project'


function App() {

  return (
    <div className='bg-gray-800 '>
      <Nav />
      <Header />
      <Project />
    </div>
  )
}

export default App
