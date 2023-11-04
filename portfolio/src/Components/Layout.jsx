import { About } from "./About"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Projects } from "./Projects"
import { Service } from "./Service"

export const Layout = () => {
  return (
    <div className="">
      <Nav />
      <Header />
      <Projects />
      <Service />
      <About />
    </div>

  )
}
