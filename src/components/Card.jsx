import React from 'react'

const Card = ({icon,bgColor,text}) => {
  return (
    <div className='w-[98%] rounded-md mb-2 sm:w-[50%] md:w-[33.33%] h-[280px] flex flex-col items-center justify-center shadow-md sm:shadow-none bg-slate-800'  style={{backgroundColor:bgColor}}>
     <div className='text-[115px] mb-5'>{icon}</div>
    <div className='text-[20px] font-roboto sm:flex flex-wrap font-medium w-[250px] text-center'>{text}</div> 
     
    </div>
  )
}
  
export default Card