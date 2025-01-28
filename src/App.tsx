
import './App.css'
import GridView1 from './components/GridView1/GridView1'
import Header from './components/Header/Header'
import Publishers from './components/Publishers/Publishers'
import ShowCase from './components/ShowCase.tsx/ShowCase'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatInfo from './components/StatInfo/StatInfo'
import InfoSubmit from './components/InfoSubmit/InfoSubmit'
import GridView2 from './components/GridView2/GridView2'
import Author from './components/Author/Author'
import Inspiration from './components/Inspiration/Inspiration'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header></Header>
      <Publishers></Publishers>
      <ShowCase></ShowCase>
      <GridView1></GridView1>
      <StatInfo></StatInfo>
      <InfoSubmit></InfoSubmit>
      <GridView2></GridView2>
      <Author></Author>
      <Inspiration></Inspiration>
      <Footer></Footer>
    </>
  )
}

export default App
