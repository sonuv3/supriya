
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route element={<HomePage></HomePage>} path='/'></Route>
      <Route element={<About></About>} path='/About'></Route>
      <Route element={<Services></Services>} path='/services'></Route>
      <Route element={<Contact></Contact>} path='/contact'></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
