import React from 'react';
import Card from '../../../components/Dashboard/Card';
import '../../../compiled/mainsection.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const MainSection = () => {
   const obj1={
        title: "Total Balance",
        balance: "$70,000",
        month: "October",
        percentYield: "+20%"
    }

    const obj2={
      title: "Sales",
      balance: "$3,000",
      month: "October",
      percentYield: "+10%"
  }

  const options = ['7 days', '1 day', '30 days'];

  return (
    <div className='main_section_container'>
       <div className='container_one'>
         <Card data={obj1}/>
         <Card data={obj2}/>
       </div>

       <div className='container_two'>
         <p>Sale statistics</p>
         <Dropdown   
            arrowClosed={<span className="arrow-closed" />}
            arrowOpen={<span className="arrow-open" />} 
            options={options}
          />
       </div>

       <div className='container_three'>
         <p>Customer Demographic</p>
         <Link><p>See all</p></Link>
       </div>
       <div className='container_three_map'>

       </div>
    </div>
  )
}

export default MainSection;