import React from 'react';
import '../compiled/textinput.css'

const TextInput = ({valueInput, valueFunction, placeholder}) => {
  return (
    <input className="textinput" type="text" placeholder={placeholder} value={valueInput} onChange={valueFunction}/>
  )
}

export default TextInput;