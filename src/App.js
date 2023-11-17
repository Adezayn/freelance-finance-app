import { Route, Routes } from 'react-router-dom';
import {Dashboard, FinancialTools, LandingPage, ProfileMgt, TransactionMgt} from './pages';
import './compiled/index.css';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/profile' element={<ProfileMgt />} />
      <Route exact path='/finance-tools' element={<FinancialTools />} />
      <Route exact path='/transactions' element={<TransactionMgt />} />
    </Routes>
  );
}

export default App;
