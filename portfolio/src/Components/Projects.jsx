
import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "../services/Alldata";

import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { Project } from "./Project";


export const Projects = () => {
  const [showModal, setShowModal] = useState();
  const [id, setId] = useState();
  const { isLoading, error, data: projects } = useQuery({ queryKey: ['projects'], queryFn: fetchProject })
  console.log(projects)
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  // useEffect(() => {
  //   Aos.init({
  //     easing: 'ease-out-quart',
  //     delay: 0,
  //     duration: 750
  //   })
  // }, [])
  //
  //
  return (

    <div>


      <div data-aos="fade-right" className=" flex items-center justify-center flex-col my-32 container mx-auto bg-bg-gradient-to-bl from-fuchsia-100 to-green-100 " id="projects">
        <h1 className="text-5xl uppercase  underline underline-offset-8 decoration-blue-500  font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-12">Projects</h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {
            projects.map(project =>
              <Link to={`/projects/${project.id}`} smooth={true} duration={500} className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">                <div key={project.id} className="shadow-xl rounded-lg">
                <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110 p-2 bg-sky-300 shadow shadow-xl shadow-sky-500 glow">
                    <img src={`http://localhost:8000${project.image}`} alt="" />
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                  <p className="text-body mb-4">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="underline underline-offset-8">View</Link>
                  <button onClick={() => [setId(project.id), setShowModal(true)]}>
                    <h1>Show</h1>
                  </button>
                  {showModal && <Project id={id} setDeleteModal={setShowModal} />}

                </div>
              </div>
              </Link>
            )
          }
        </div>
      </div>
    </div >
  )
}
