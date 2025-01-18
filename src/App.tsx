
import './App.css'
import GridView1 from './components/GridView1/GridView1'
import Header from './components/Header/Header'
import Publishers from './components/Publishers/Publishers'
import ShowCase from './components/ShowCase.tsx/ShowCase'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatInfo from './components/StatInfo/StatInfo'


function App() {

  return (
    <>
      <Header></Header>
      <Publishers></Publishers>
      <ShowCase></ShowCase>
      <GridView1></GridView1>
      <StatInfo></StatInfo>
    </>
  )
}

export default App
