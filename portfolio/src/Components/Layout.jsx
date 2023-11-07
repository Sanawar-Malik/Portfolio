
import { About } from "./About"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Projects } from "./Projects"
import { Service } from "./Service"

export const Layout = () => {
  return (
    <div className="bg-gradient-to-tl from-slate-100 via-neutral-100 to-slate-100">
      <Nav />
      <Header />
      <Projects />
      <Service />
      <About />

    </div>

  )
}
