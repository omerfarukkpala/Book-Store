import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Section from './components/Section';
import BookProductPage from './pages/BookProductPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Адресамагазинов' element={<About />} />
            <Route path='/Поддержкаиконтакты' element={<Contact />} />
            <Route path='/Заказатьзвонок' element={<BookProductPage />} />
          </Routes>
        </div>
      </div>
      <Routes>
        {/* Anasayfa için Section'ı ekliyoruz */}
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
