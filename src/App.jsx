import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Home from './components/Home';
import Structure from './components/Structure';
import { Routes, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Create from '../pages/Create';

const App = () => {
  return (
    <div className='min-h-screen w-full pb-1'>
      <Nav1 />
      <Routes>
        <Route path='/' element={<Structure />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App;