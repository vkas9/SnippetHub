import React from 'react'

import QuickLink from './QuickLink'
import Languages from './Languages'
const Sidebar = () => {
  
  return (
    <div className='w-[180px] max-sm:hidden h-full p-3 flex flex-col pt-7 bg-gradient-to-b from-[#030836] to-transparent  gap-5 border-r border-white/10'>
      <div>
        <h1 className='text-white/50 font-semibold '>
            Quick Links
        </h1>
        <div className=' pl-1 mt-4  '>
            <ul className='flex flex-col gap-1'>


               <QuickLink/>
                
            </ul>
        </div>
      </div>

      <div>
      <h1 className='text-white/50 font-semibold '>
            Languages
        </h1>
        <div className='pl-1 mt-4'>
          <ul  className='flex flex-col gap-1'>
            <Languages/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
