import React from 'react'
import { useNavigate } from 'react-router-dom'
 
  
  

const Button = ({icon,bgColor,text,tColor}) => {
  const navigate = useNavigate()
  function clickHandle(){
    navigate('/login/signUp')
  }
  return (
    
    <div><button onClick={clickHandle} style={{backgroundColor:bgColor,color:tColor}} className='text-[12px] py-1 pl-[8px] pr-[0] border-[1.5px] ml-4 mr-[-8px] border-emerald-700 text-green-700 font-[600] sm:mr-[-80px] md:mr-0 sm:text-sm md:text-xl sm:py-4 sm:px-2 md:px-11 sm:ml-0  rounded-[7px] hover:bg-green-900 hover:text-sky-50 flex'>{text} <div className='w-[10px] pt-2 px-4' >{icon}</div> </button>
    </div>
  )
}

export default Button 