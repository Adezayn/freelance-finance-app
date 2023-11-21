import { Route, Routes } from 'react-router-dom';
import {Dashboard, LandingPage, ProfileMgt, Messaging, Home, FinancialTools, TransactionMgt} from './pages';

import './compiled/index.css';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/dashboard' element={<Dashboard />} >
         <Route  index element={<Home />} />
         <Route  path='finance-tools' element={<FinancialTools />} />
         <Route  path='transactions' element={<TransactionMgt />} />
         <Route  path='messaging' element={<Messaging />} />
      </Route>  
      <Route exact path='/profile' element={<ProfileMgt />} />
    </Routes>
  );
}

export default App;
