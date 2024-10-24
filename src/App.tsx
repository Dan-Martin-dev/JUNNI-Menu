import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact.tsx';
import Expertise from './components/Expertise.tsx';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';

function App() {
  return (
    <> 
      <Header/>
      <Router basename="/baseName">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/expertise" element={<Expertise/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
