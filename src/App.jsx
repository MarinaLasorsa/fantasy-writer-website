import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Book from './pages/Book';
import Map from './pages/Map';
import Characters from './pages/Characters';
import News from './pages/News';
import NavBar from './components/NavBar/NavBar';
import './styles/general.scss'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/map" element={<Map />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

export default App
