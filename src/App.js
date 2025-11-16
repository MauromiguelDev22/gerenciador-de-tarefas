import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Company from './components/pages/company';
import NewProject from './components/pages/newproject';
import Projects from './components/pages/Projects';

import Container from './components/layout/container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar>

      </Navbar>
     <Container customClass="min-height">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />

    <Route path="/company" element={<Company />} />
    <Route path="/newproject" element={<NewProject />} />
  </Routes>
</Container>


      <Footer/>
    </Router>
  );
}

export default App;

