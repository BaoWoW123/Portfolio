import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>

    </div>
  );
}

export default App;
