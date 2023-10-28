import { TypeAnimation } from "react-type-animation"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"

export const Header = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 h-[80vh] sm:h-[80vh] text-white overflow-hidden">


        <div className="relative z-10 flex flex-col flex-wrap-reverse h-full text-center">
          <div className=" flex mx-auto md:flex-row  md:py-20 flex-col container text-white">
            <div className="basis-[45%] m-auto mt-24 justify-center items-center text-center">
              <h1 className="text-[32px] font-semibold text-white mb-2 leading-normal">Muhammad Sanawar</h1>
              <h1 className="text-[24px] font-semibold leading-normal">I am a <span className="text-fuchsia-600"><TypeAnimation sequence={['Software Engineer', 'Developer', 2000, 'Designer', 2000,]} speed={300} /></span></h1>
              <p class="text-lg text-gray-300 px-4 mb-8">I'm a software engineer and full stack web developer with a passion for crafting digital experiences. I specialize in creating dynamic, user-friendly web applications that seamlessly blend front-end aesthetics with back-end functionality.</p>
              <div className="flex text-white mx-auto justify-center items-center mb-8 gap-5">
                <div className="flex gap-8 text-center rounded-full">
                  <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]" />
                  </a>
                  <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FaLinkedinIn className="text-[28px]" />
                  </a>
                  <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FaTelegramPlane className="text-[28px]" />
                  </a>
                  <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FiTwitter className="text-[28px]" />
                  </a>

                </div>

              </div>
            </div>
            <div class="basis-[55%] relative flex justify-center items-center mb-4">
              <div class="absolute animate-spin rounded-full h-80 w-80 border-t-4 border-b-4 border-purple-500"></div>
              <img src="./sanawar.jpg" class="rounded-full h-72 w-72" />
            </div>
          </div>

        </div>
      </div>
    </div >

  )
}
