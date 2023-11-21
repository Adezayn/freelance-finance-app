import React from 'react'
import Card from '../../components/Dashboard/Card';

const MainSection = () => {
   const obj={
        title: "Total Balance",
        balance: "70,000"
    }
  return (
    <div>
        <Card obj/>
        <Card />
    </div>
  )
}

export default MainSection;