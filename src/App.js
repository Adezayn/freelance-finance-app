import { Route, Routes } from 'react-router-dom';
import {Dashboard, LandingPage, ProfileMgt, Messaging, Home, FinancialTools, TransactionMgt, Login, SignUp} from './pages';

import './compiled/index.css';

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route exact path='/dashboard' element={<Dashboard />} >
         <Route  index element={<Home />} />
         <Route  path='finance-tools' element={<FinancialTools />} />
         <Route  path='transactions' element={<TransactionMgt />} />
         <Route  path='messaging' element={<Messaging />} />
      </Route>  
      <Route exact path='/profile' element={<ProfileMgt />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
