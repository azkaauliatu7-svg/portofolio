import React from 'react';
import { LanguageProvider } from './context/LanguageContext.js';
import LoadingScreen from './components/LoadingScreen.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Certificates from './components/Certificates.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <ScrollToTop />
        <main style={{ flex: 1 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
