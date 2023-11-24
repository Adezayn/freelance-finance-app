import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import '../../compiled/card.css';

const Card = (props) => {
  console.log(props)
  const { data } = props
  const { title, balance, percentYield, month } = data
  // const { title, balance, percentYield, month } = data
  return (
    <div className={`card_container ${title === "Sales" ? 'outgoing' : 'income'}`}>
      <p className='title '>{title}</p>
      <div className='mid_container'>
        <p className='text'>{balance}</p>
        <div className='mini_container'>
          {/* {title === "Sales" ?  (<FaArrowTrendUp color='#00BE1D'/>) : (<FaArrowTrendDown color='red' />)} */}
           <FaArrowTrendUp color='#00BE1D'/>
          <p className='text'>{percentYield}</p>
        </div>
      </div>
      <p className='mini_text'>in {month}</p>
        <div className='circle_one'/>
        <div className={`circle_two circle_two_${title === "Sales" ? 'outgoing' : 'income'}`}/>
    </div>
  )
}

export default Card;