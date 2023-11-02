import { fetchServices } from "../services/Alldata";
import { useQuery } from '@tanstack/react-query';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Service = () => {
  const { isLoading, error, data: services } = useQuery({ queryKey: ['servicess'], queryFn: fetchServices });
  console.log(services);
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

  return (
    <div>
      <section className="bg-slate-100 py-16 " id="service">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl uppercase  underline underline-offset-8 decoration-blue-500  font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">Services</h1>
          <div data-aos="fade-right" className="grid gap-12 p-2 mt-8 sm:grid-cols-4 py-24 sm:px-8">
            {services.map((item) => (
              <div key={item.id} className="flex p-4 transform rounded-full bg-white shadow-xl items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-[rgba(8,_112,_184,_0.7)_0px_3px_8px]">
                <div className="relative w-24 h-16 p-2 justify-between items-center flex-shrink-0">
                  <img className="absolute left-0 top-0 w-full h-full object-fill object-center transition duration-50" loading="lazy" src={`http://localhost:8000${item.image}`} alt="" />
                </div>
                <div className="w-full justify-items-end">
                  <p className="text-xl text-gray-500 font-semibold justify-items-end">{item.name}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};









