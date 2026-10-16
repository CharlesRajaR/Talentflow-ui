'use client'

import  { useState } from 'react'
import JobCard from '@/components/jobCard'

const page = () => {
  const jobs = [1, 2, 3, 4, 5, 6]
  const [keyword, setKeyword] = useState<string>('')
  console.log(keyword)
  return (
    <div className="flex min-h-screen min-w-screen items-start justify-center">
      <div className="w-full pt-2 md:pt-5">
        <div className="flex w-full px-3">
          <div className="w-[80%] px-5">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className='border-2 w-full py-2 px-3 border-gray-300 rounded-xl text-xs md:text-sm  font-semibold md:font-bold' type="text" placeholder="Search jobs titles, companies, keywords..."  />
          </div>
          <div className="w-[20%]">
            <button className='border-2 w-full text-white hover:bg-blue-700 hover:cursor-pointer bg-blue-600 py-2 px-3 md:font-semibold lg:font-bold rounded-xl text-xs md:text-sm'>Search</button>
          </div>
        </div>

        <div>
          <div className='my-3 mx-5 px-5'>
            <p className='font-semibold lg:font-bold text-xs md:text-sm lg:text-xl'>{jobs.length} Jobs Found! <span>Updated today</span></p>
          </div>
          <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 px-3 mt-5'>
            {
            jobs.map((item) => (
              <div key={item}>
                <JobCard id={"1"}/>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page