import React from 'react';
import plusIcon from '../../assets/plus-icon.svg';
import '../../compiled/accordion.css';

const AccordionItem = ({object}) => {
  return (
    <div className='accordion_item'>
         <div className='accord'>
            <p>{object.question}</p>
            <img src={plusIcon} alt="plus icon" style={{width: '20px'}}/>
        </div>
    </div>
  )
}

export default AccordionItem