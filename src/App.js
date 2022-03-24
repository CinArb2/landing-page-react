import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Services from './pages/Services';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Theme from './components/Theme';
import  GlobalStyle  from './components/GlobalStyle'

function App() {
  return (
    <Theme>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer/>
    </Theme>
  );
}

export default App;


