import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './utils/CursorAnimation';

function App() {
  return (
    <Router>
      <div className='font-sora scroll-smooth overflow-x-hidden'>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Skills />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
