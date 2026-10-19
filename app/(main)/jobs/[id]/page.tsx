"use client"
import { useParams } from "next/navigation"

const JobDetails = () => {
  const params = useParams<{ id: string }>()

  console.log('Server-side ID:', params);


  return (
    // <div>JobDetails {id}</div>
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex px-4 py-6 mx-5 shadow-black shadow-2xl flex-col w-full">
        <div>
          <button className="text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700">{"< "} Back to jobs</button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mx-3 mt-3">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl md:text-2xl font-semibold md:font-bold">Product Designer</p>
            </div>
            <div className="flex gap-1 md:gap-3 text-xs md:text-sm font-semibold">
              <p>- AirByte</p>
              <p>- Remote</p>
              <p>- Full-time</p>
              <p>- Posted 2 days ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500 my-3 px-3 text-xs md:text-sm text-white font-semibold md:font-bold rounded-sm hover:bg-blue-600 hover:cursor-pointer">
              Apply Now
            </button>
            <button className="bg-gray-200 my-3 px-3 text-xs md:text-sm text-gray-700 font-semibold md:font-bold rounded-sm hover:bg-gray-300 hover:cursor-pointer">
              Save
            </button>
          </div>

        </div>
        <div className="flex  flex-col md:flex-row w-full justify-start gap-3 mx-1 mt-3">
          <div className="border-2 border-gray-300 bg-gray-100 hover:cursor-pointer hover:bg-gray-200 text-xs md:text-sm font-semibold rounded-sm px-11 py-1">
            <p>Salary</p>
            <p>$70,000 - $90,000</p>
          </div>

          <div className="border-2 border-gray-300 bg-gray-100 hover:cursor-pointer hover:bg-gray-200 text-xs md:text-sm  font-semibold rounded-sm px-11 py-1">
            <p>Experience</p>
            <p>3-5 years</p>
          </div>

          <div className="border-2 border-gray-300 bg-gray-100 hover:cursor-pointer hover:bg-gray-200 text-xs md:text-sm  font-semibold rounded-sm px-11 py-1">
            <p>Location</p>
            <p>San Francisco, CA</p>
          </div>

        </div>


        <div className="flex flex-col gap-3 mx-3 mt-5">
          <div>
            <p className="text-sm md:text-lg font-semibold">About the role</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-gray-600">
              We are looking for a talented Product Designer to join our team. The ideal candidate should have experience in designing user interfaces and experiences for web and mobile applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row gap-3 mt-3 mx-3">
          <div className="flex flex-col gap-3 w-full md:w-[50%]">
            <p className="text-sm md:text-lg font-semibold">Responsibilities</p>
            <div className="text-sm md:text-base pl-5 text-gray-600">
              <p>- Create user-centered designs for web and mobile applications</p>
              <p>- Collaborate with cross-functional teams to define and implement design solutions</p>
              <p>- Conduct user research and usability testing to inform design decisions</p>
              <p>- Create user-centered designs for web and mobile applications</p>
              <p>- Collaborate with cross-functional teams to define and implement design solutions</p>
              <p>- Conduct user research and usability testing to inform design decisions</p>
              <p>- Create user-centered designs for web and mobile applications</p>
              <p>- Collaborate with cross-functional teams to define and implement design solutions</p>
              <p>- Conduct user research and usability testing to inform design decisions</p>
              <p>- Create user-centered designs for web and mobile applications</p>
              <p>- Collaborate with cross-functional teams to define and implement design solutions</p>
              <p>- Conduct user research and usability testing to inform design decisions</p>
       
            </div>
          </div>
          {/* <div className="w-px h-32 bg-gray-300"></div> */}

          <div className="flex flex-col gap-3 w-full md:w-[50%]">
            <p className="text-sm md:text-lg font-semibold">Requirements</p>
            <div className="text-sm pl-5 md:text-base text-gray-600">
              <p>- Bachelors degree in Design or related field</p>
              <p>- 3+ years of experience in product design</p>
              <p>- Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default JobDetails