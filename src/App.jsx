import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <ul className='nav'>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/about' className='link'>About Us</Link></li>
        <li><Link to='/articles' className='link'>Articles</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/*' element={<NotFound />} />


      </Routes>
    </div >
  );
}

export default App;
