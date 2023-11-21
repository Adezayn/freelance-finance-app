import React from 'react'
import MainSection from './MainSection';
import Aside from './Aside';

const Home = () => {
  return (
    <div className='home_container'>
      <div className='flex_one'>
         <MainSection />
      </div>
      <div className='flex_two'>
        <Aside />
      </div>
      
    </div>
  )
}

export default Home;