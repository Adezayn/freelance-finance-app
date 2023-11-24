import React from 'react'
import MainSection from './MainSection';
import Aside from './Aside';
import '../../compiled/home.css';

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_container_flex_one'>
         <MainSection />
      </div>
      <div className='home_container_flex_two'>
        <Aside />
      </div>
      
    </div>
  )
}

export default Home;