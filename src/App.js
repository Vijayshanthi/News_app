import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import { Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Links from './pages/Links';
import Projects from './pages/Projects.js';
import About from './pages/About';
import Footer from './components/Footer';
import Api from './components/Api';

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Routes >
        <Route path="/blogs/:id" component={<Blogs/>} /> 
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/Api" element={<Api />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
