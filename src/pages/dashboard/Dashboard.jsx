import React from 'react'
import {Outlet} from 'react-router-dom';
import {Sidebar, Navbar} from '../../components/Dashboard';
import '../../compiled/dashboard.css';

const Dashboard = () => {
  return (
        <div className='dashboard_container'>
            <div className='flex_one'>
              <Sidebar />
            </div>
            <div className='flex_two'>
              <div className='navbar'>
               <Navbar />
              </div>
                <div className='flex_two_inner_container'>
                   <Outlet /> 
                </div>
            </div>
        </div>
)
};

export default Dashboard;