import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import Navbar from './components/Navbar'; // Import the Navbar component
import background from './assets/background.jpeg'; 

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
          overflowY: 'auto'
        }}
      >
        
        <Navbar /> 

        <div className="flex-grow w-full overflow-y-auto mt-32"> {/* Add margin-top to avoid content being hidden behind the navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/skills" element={<Skills />} />  
          </Routes>
        </div>

        <footer className="p-4 bg-gray-800 text-white w-full text-center rounded-xl mt-auto shadow-lg">
          <p>&copy; {new Date().getFullYear()} Deng Luxury mou. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;