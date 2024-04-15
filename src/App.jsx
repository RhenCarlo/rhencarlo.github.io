import './App.css'
import data from './data.json';
import Home from 'sections/Home'
import Invitation from 'sections/Invitation'
import Location from 'sections/Location'
import Gallery from 'sections/Gallery'
import Registry from 'sections/Registry'
import Unplugged from 'sections/Unplugged'
import Faq from 'sections/Faq'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const App = () => {

  return (
    <>
      <Home data={data}/>
      <Nav data={data}/>
      <Invitation data={data}/>
      <Location data={data}/>
      <Gallery data={data}/>
      <Registry data={data}/>
      <Unplugged data={data}/>
      <Faq data={data}/>
      <Footer data={data}/>
    </>
  )
}

export default App;
