import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Home from './components/Home';

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Nav1 />
      <div className='h-full w-full flex'>
        <Nav2 />
        <Home />
      </div>
    </div>
  )
}

export default App;