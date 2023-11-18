import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar';
import Home from './Home';
import '../compiled/dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
        <div className='flex_one'>
          <Sidebar />
        </div>
        <div className='flex_two'>
          <Home />
        </div>
   
</div>
)
};

export default Dashboard