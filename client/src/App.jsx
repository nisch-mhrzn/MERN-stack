import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Error } from './pages/Error';
import {Footer } from './components/Footer/Footer';
const App = () => {
  return ( // Add the return statement
    <>
      <BrowserRouter>
      <Navbar />  {/* Add the Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element ={<Error/>}/>
          {/* error page */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
