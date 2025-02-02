import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './components/Header/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import NotFound from "./pages/NotFound"; // Optional: for 404 pages

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />    {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        {/* <Route path="*" element={<NotFound />} />  404 Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;