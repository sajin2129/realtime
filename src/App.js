import './App.css';
import { Routes, Route } from 'react-router-dom';
import Head from './landingpage/Head';
import Landingpage from './landingpage/Landingpage';
import Aboutus from './Aboutus';
import Usecase from './Usecase';
import Service from './Service';
import Mediapage from './Mediapage';
import Footer from './landingpage/Footer';
import Contact from './landingpage/Contact';
import Presspage from './Presspage';
import Contactfoot from './Contactfoot';
import Msgform from './Msgform'

function App() {
  return (
    <div className="App">
      <Head />

      <Routes>

        
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/usecase" element={<Usecase />} />
        <Route path="/service" element={<Service />} />
        <Route path="/media" element={<Mediapage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presspage" element={<Presspage />} />
        <Route path="/contactfoot" element={<Contactfoot />} />
        <Route path="/msgform" element={<Msgform />} />




      </Routes>
    </div>
  );
}

export default App;
