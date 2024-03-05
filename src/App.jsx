import './App.css'
import Home from './sections/Home'
import When from './sections/When'
import Location from './sections/Location'
import Registry from './sections/Registry'
import Rsvp from './sections/Rsvp'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Home/>
      <Nav/>
      <When/>
      <Location/>
      <Registry/>
      <Rsvp/>
    </>
  )
}

export default App
