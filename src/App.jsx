import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import Navbar from './components/Navbar'; 
import background from './assets/background.jpeg'; 

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const App = () => {
  return (
    <Router>
      <div 
        className="flex flex-col items-center p-4 bg-white" 
        style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover', 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          overflowY: 'hidden'
        }}
      >
        <Navbar /> 

        <div className="flex-grow w-full overflow-y-auto mt-32">  
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <AboutMe />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <ContactMe />
                </motion.div>
              } 
            />
            <Route 
              path="/skills" 
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Skills />
                </motion.div>
              } 
            />
          </Routes>
        </div>

        <footer className="p-4 bg-gray-800 text-white w-full text-center rounded-xl mt-auto shadow-lg">
          <p>&copy; {new Date().getFullYear()} Deng Luxury Mou. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
