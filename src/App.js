import { Route, Routes } from 'react-router-dom';
import {Dashboard, LandingPage, ProfileMgt} from './pages';
import './compiled/index.css';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/dashboard/*' element={<Dashboard />} />
      <Route exact path='/profile' element={<ProfileMgt />} />
    </Routes>
  );
}

export default App;
