import { Navigate, Route, Routes } from 'react-router';
import Home from '../components/organisms/Home';
import News from '../components/organisms/News';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route path='home' element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
      </Route>
      <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
  );
}

export default App;
