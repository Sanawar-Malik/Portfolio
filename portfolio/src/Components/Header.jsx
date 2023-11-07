import { TypeAnimation } from "react-type-animation"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div> <div className="bg-gradient-to-br  from-cyan-300 via-blue-500 to-blue-600 shadow-slate-700 shadow-lg" id="/">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between pt-32 pb-20 gap-5">
        <div className="md:w-1/2 w-full flex justify-center items-center mx-auto">
          <img src='./sanawar.jpg' alt="" className="rounded-full h-60 w-60 shadow-[rgba(8,112,184,0.7) 0px 0px 0px 2px, rgba(6,24,44,0.65) 0px 4px 6px -1px, rgba(255,255,255,0.08) 0px 1px 0px inset]" />
        </div>

        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">

          <h1 className="md:text-4xl text-4xl font-extrabold  text-headingcolor leading-snug md:leading-[76px] text-center uppercase">
            Muhammad <span className="text-white">Sanawar</span>
          </h1>
          <h1 className="text-[30px] text-center uppercase font-semibold text-[#dcf3ff] leading-normal underline underline-offset-4 decoration-4 decoration-[#dcf3ff] "><TypeAnimation sequence={['Software Engineer', 2000, 'Developer', 2000, 'Designer', 2000,]} speed={400} repeat={Infinity} /></h1>

          <div className="flex text-white mx-auto justify-center mt-8 items-center gap-5">
            <div className="flex gap-8 text-center rounded-full">
              <a href="" className="bg-white text-blue-500 hover:text-slate-500 rounded-full  glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="" className="bg-white text-blue-500 hover:text-sky-600 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="" className="bg-white text-blue-500 hover:text-sky-600 rounded-full glow p-2">
                <FaTelegramPlane className="text-[28px]" />
              </a>
              <a href="" className="bg-white text-blue-500 hover:text-sky-600 rounded-full glow p-2">
                <FiTwitter className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >

  )
}
