import { Navigate, Route, Routes } from 'react-router';
import Auth from '../components/organisms/Auth';
import Application from '../components/organisms/BankLoan/Application';
import BankLoans from '../components/organisms/BankLoan/BankLoans';
import Manage from '../components/organisms/BankLoan/Manage';
import Home from '../components/organisms/Home';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route path='auth' element={<Auth />} />
      <Route path='home' element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path='application' element={<Application />} />
        <Route path='bank-loans' element={<BankLoans />}/>
        <Route path='manage-bank-loans' element={<Manage />}/>
      </Route>
      <Route path='*' element={<Navigate to='/auth' replace />} />
    </Routes>
  );
}

export default App;
