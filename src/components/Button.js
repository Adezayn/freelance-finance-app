import React from 'react';
import '../compiled/button.css'

const Button = ({ type, onClick, color, children, optionalStyle}) => {
  return (
   <button type={type || 'button'} onClick={onClick || (()=>{})} className={`button ${color} ${optionalStyle}`}>{children}</button>
  )
}

export default Button;