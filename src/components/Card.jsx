import React from 'react'

const Card = ({icon,bgColor,text}) => {
  return (
    <div className='w-[33.33%] h-[320px] flex flex-col items-center justify-center bg-slate-900'  style={{backgroundColor:bgColor}}>
     <div className='text-[115px] mb-5'>{icon}</div>
    <div className='text-[20px] font-roboto flex flex-wrap font-medium w-[250px] text-center'>{text}</div> 
     
    </div>
  )
}

export default Card