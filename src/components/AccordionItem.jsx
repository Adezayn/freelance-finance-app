import React from 'react';
import '../compiled/accordion.css';

const AccordionItem = ({object, curOpen, onOpen}) => {
  const isOpen = curOpen === object.id;
  return (
    <div className={`accordion_item ${isOpen ? "open_accordion" : ""}`} onClick={()=>onOpen(isOpen ? null : object.id)}>
         <div className='accord'>
            <p>{object.question}</p>
            <p className='switch-icon'>{isOpen ? '-' : '+'}</p>
        </div>
      {isOpen &&   <h4>{object.answer}</h4> }
    </div>
  )
}

export default AccordionItem