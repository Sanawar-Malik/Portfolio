import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci"


export const Nav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded-full">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded-full">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Project">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded-full">Project</li>
        </Link>
        <Link spy={true} smooth={true} to="Service">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded-full">Service</li>
        </Link>
        <Link spy={true} smooth={true} to="Experience">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded-full">Experience</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <div>
      <nav>
        <div className="h-[8vh] flex bg-[#2a0d5d] justify-between bg-site z-50 text-white lg:py-5 px-20 py-4 flex-1 fixed top-0 w-full">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">
              Logo
            </span>
          </div>
          <div className="lg:flex md:flex  lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="Home">
                  <li className='hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer'>Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                  <li className='hover:text-fuchsia-600 transition hover:border-b-2  hover:border-fuchsia-600 cursor-pointer'>About</li>
                </Link>
                <Link spy={true} smooth={true} to="Project">
                  <li className='hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer'>Project</li>
                </Link>
                <Link spy={true} smooth={true} to="Service">
                  <li className='hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer'>Service</li>
                </Link>
                <Link spy={true} smooth={true} to="Experience">
                  <li className='hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer'>Experience</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {open && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {open ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>

    </div>
  )
}
