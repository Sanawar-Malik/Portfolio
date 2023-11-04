export const Education = () => {
  return (
    <div>
      <div class="p-4 mt-4" id="education">
        <h1 className="text-5xl uppercase text-center mb-8 underline underline-offset-8 decoration-blue-500  font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">Education</h1>
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div class="flex md:contents">
              <div class="col-start-3 col-end-5 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-sky-400 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-900 shadow text-center">
                  <i class="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div class="bg-white text-black col-start-5 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 class="font-semibold text-lg mb-1">Package Booked</h3>
                <p class="leading-tight text-justify w-full">
                  21 July 2021, 04:30 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

