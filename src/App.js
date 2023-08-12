import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Goal from './components/Goal';
import Food from './components/Food';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/goal" element={<Goal/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/quote" element={<Quote/>} />
      </Routes>
    </div>
  );
}

export default App;
