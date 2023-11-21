import React from 'react';
import '../../compiled/card.css';

const Card = (props) => {
  console.log(props)
  const {title, balance, percentYield, month} = props
  return (
    <div className='card_container'>
      <p className='title'>{title}</p>
      <div className='mid_container'>
        <p className='text'>{balance}</p>
        <div className='mini_container'>
          <p className='text'>{percentYield}</p>
        </div>
      </div>
      <p className='mini_text'>in {month}</p>
    </div>
  )
}

export default Card;