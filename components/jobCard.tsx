import React from 'react'
import { redirect } from 'next/navigation'

const JobCard = ({ id }: { id: string }) => {
    const redirectToJobDetails = (id: string) => {
        redirect(`/jobs/${id}`)
    }
  return (
    <div className='border-2 border-gray-300 mx-5 p-3 rounded-xl'>
        <div className="flex flex-col items-start gap-2">
            <div className='flex flex-col gap-1'>
                <p className='font-semibold lg:font-bold text-lg'>Product Designer</p>
                <p className='text-sm font-semibold'>Airbyte - Remote - Fulltime</p>
            </div>
            <div>
                <p className='font-bold text-2xl'>$100k - $120k</p>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-3 justify-between'>
                <div>
                    <p className='text-xs md:text-sm'>Join our design team to build intuitive product experiences for data teams</p>
                </div>
                <div>
                    <button className='text-xs md:text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-xl font-semibold hover:cursor-pointer' onClick={() => redirectToJobDetails(id)}>View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobCard