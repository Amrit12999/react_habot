import React from 'react'
import { useNavigate } from 'react-router-dom'
 
  
  

const Button = ({icon,bgColor,text,tColor}) => {
  const navigate = useNavigate()
  function clickHandle(){
    navigate('/login/signUp')
  }
  return (
    
    <div><button onClick={clickHandle} style={{backgroundColor:bgColor,color:tColor}} className='border-[1.5px] border-emerald-700 text-green-700 font-[600] text-xl py-4 px-11 rounded-[7px] hover:bg-green-900 hover:text-sky-50 flex'>{text} <div className='w-[10px] pt-2 px-4' >{icon}</div> </button>
    </div>
  )
}

export default Button