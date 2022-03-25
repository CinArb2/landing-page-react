import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Theme from './components/Theme';
import  GlobalStyle  from './components/GlobalStyle'
import SectionServices from './components/SectionServices';

function App() {
  return (
    <Theme>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SectionServices />} />
        <Route path="/" element={<Footer />} />
      </Routes>
      <Footer/>
    </Theme>
  );
}

export default App;


