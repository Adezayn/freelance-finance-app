import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {Sidebar, Navbar} from '../components/Dashboard';
import {Home, FinancialTools, TransactionMgt, Messaging} from './index';
import '../compiled/dashboard.css';

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
                  <Routes>
                    <Route  path='/dashboard' element={<Home />} />
                    <Route  path='/dashboard/finance-tools' element={<FinancialTools />} />
                    <Route  path='/dashboard/transactions' element={<TransactionMgt />} />
                    <Route  path='/dashboard/messaging' element={<Messaging />} />
                  </Routes>
                </div>
            </div>
        </div>
)
};

export default Dashboard