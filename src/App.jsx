import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Home from './components/Home';
import Structure from './components/Structure';
import { Routes, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Create from '../pages/Create';
import Toast from './utils/Toast';
import Login from './Auth/Login';
import About from '../pages/About';
import Footer from '../pages/Footer';

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Toast/>
      <Nav1 />
      <Routes>
        <Route path='/' element={<Structure />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;