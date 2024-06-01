
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';

function App() {
 

  return (
    <>
    <Routes>

    <Route path="/" element={<Home/>} />
   <Route path="/contacto" element={<Contacto/>} />
   <Route path="*" element={<Home/>}/>
    </Routes>
   
    </>
  )
}

export default App
