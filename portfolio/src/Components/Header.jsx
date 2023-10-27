import { TypeAnimation } from "react-type-animation"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"

export const Header = () => {
  return (
    <div>
      <div className="relative bg-[#0d1137] h-auto text-white overflow-hidden">


        <div className="relative z-10 flex flex-col h-full text-center">
          <div className=" h-auto flex mx-auto md:flex-row  md:py-20 flex-col container text-white">
            <div className="basis-[45%] m-auto mt-36 justify-center items-center text-center">
              <h1 className="text-[32px] font-semibold text-white mb-2 leading-normal">Muhammad Sanawar</h1>
              <h1 className="text-[24px] font-semibold leading-normal">I am a <span className="text-fuchsia-600"><TypeAnimation sequence={['Software Engineer', 'Developer', 2000, 'Designer', 2000,]} speed={300} /></span></h1>
              <p class="text-lg text-gray-300 px-4 mb-8">I'm a software engineer and full stack web developer with a passion for crafting digital experiences. I specialize in creating dynamic, user-friendly web applications that seamlessly blend front-end aesthetics with back-end functionality.</p>
              <div className="flex text-white mx-auto justify-center items-center gap-5">
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
            <div className="basis-[55%]"><img src='./malik.jpg' alt="My Image" className="p-8 w-full h-full mx-auto rounded-full" /></div>
          </div>

        </div>
      </div>
    </div>

    // <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white">
    //
    //   <div className="flex mx-auto ">
    //     <div className="basis-[45%]">good</div>
    //     <div className="basis-[55%]">imge</div>
    //   </div>
    //   <div className=" w-full border lg:py-0 text-center lg-text-start flex lg:flex-row flex-col-reverse justify-between  items-center ">
    //     <div className="h-[100vh] border border-red lg:py-40 flex flex-col justify-center lg-items-start items-center text-white">
    //       <h1 className="text-[24px] font-semibold text-white mb-2 leading-normal">Muhammad Sanawar</h1>
    //       <h1 className="text-[24px] font-semibold leading-normal">I am a <span className="text-fuchsia-600"><TypeAnimation sequence={['Software Engineer', 'Developer', 2000, 'Designer', 2000,]} speed={300} /></span></h1>
    //     </div>
    //     <img src='./malik.jpg' width={490} height={390} alt="My Image" />
    //   </div>
    //
    // </div>
  )
}
