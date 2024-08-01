import Link from 'next/link'
import React from 'react'
import {quicklinks} from "../../../src/constants/quicklinks"
import {languages} from "../../../src/constants/languages"
const Sidebar = () => {
  return (
    <div className='w-[180px] h-full p-3 flex flex-col pt-7  gap-5 border-r border-white/10'>
      <div>
        <h1 className='text-white/50 font-semibold '>
            Quick Links
        </h1>
        <div className=' pl-1 mt-4  '>
            <ul className='flex flex-col gap-1'>


                {
                    quicklinks.map((item,index)=>{
                        return <Link key={index} href={"/"} >
                            <div className='flex  items-center gap-1 hover:bg-white/10 transition-all duration-100 p-2 rounded-md'>
                                <item.icon/>
                                <span>{item.title}</span>
                            </div>
                        </Link>
                    })
                }
                
            </ul>
        </div>
      </div>

      <div>
      <h1 className='text-white/50 font-semibold '>
            Languages
        </h1>
        <div className='pl-1 mt-4'>
          <ul  className='flex flex-col gap-1'>
            {
              languages.map((item,index)=>{
                return <Link key={index} href={"/"}>
                  <div className='flex  items-center gap-1 hover:bg-white/10 justify-between transition-all duration-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 '>

                                <item.icon/>
                                <span>{item.title}</span>
                                </div>
                                <span className='text-white/30 text-sm'>{index+1}</span>
                            </div>
                </Link>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
