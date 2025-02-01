
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Home from './pages/Home';
import Nav from './components/Header/Nav';
import Footer from './components/Footer/Footer';
import About from './pages/About';



function App() {

  return (
    <>
      <Nav />
      {/* <Home /> */}
      <About />
      <Footer />
    </>
  )
}

export default App
