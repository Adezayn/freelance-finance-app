import React from 'react';
import '../compiled/button.css'

const Button = ({ type, onClick, color, children, optionalStyle, size}) => {
  return (
   <button type={type || 'button'} onClick={onClick || (()=>{})} className={`button ${color} ${optionalStyle}`} 
   style={size === 'L' ? {fontSize: "2rem"} : {fontSize: "1rem"}}>{children}</button>
  )
}

export default Button;