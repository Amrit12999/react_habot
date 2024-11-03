import React from 'react'


const SideButton = ({name}) => {
  return (
    <div className='border-[1px] text-[15px] w-[48%] sm:w-[36%]
    p-4 my-2 text-center sm:text-[16px] md:text-[20px] text-gray-600 font-semibold rounded-md border-amber-600 '>{name}</div>
  )
}

export default SideButton