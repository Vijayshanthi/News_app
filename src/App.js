import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Links from './pages/Links';
import Projects from './pages/Projects.js';
import About from './pages/About';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Routes >
        <Route index path="/" element={<Blogs/>} /> 
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogdetails/:id" element={<BlogDetail />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
