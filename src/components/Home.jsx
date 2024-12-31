import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 relative">

      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-6 text-white font-semibold text-lg">
        <a href="#about" className="hover:text-yellow-300">About</a>
        <a href="#skills" className="hover:text-yellow-300">Skills</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </nav>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-md relative">
          Welcome to Deng Luxury's Website!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-8 left-0 w-full"
            viewBox="0 0 500 100"
            fill="none"
            stroke="yellow"
            strokeWidth="4"
          >
            <path
              d="M10,50 C150,10 350,90 490,50"
              strokeLinecap="round"
            />
          </svg>
        </h1>
        <p className="mt-4 text-xl text-white">
          Discover more about me, my skills, and how to contact me.
        </p>
        <div className="mt-8">
          <p className="text-white">Scroll down to learn more.</p>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-center text-white">
        {[...Array(1).keys()].map(i => (
          <p key={i} className="opacity-80">
            The harsh truth is people will take everything you offer if you don't know when to stop
            take everything you offer if you dont know when to stop . you cant keep pouring from any empty cup and evenually that kindness will cost you more than you are willing to pay kindness without limits will drain your spirit your time and your strength and here is thing when you are constantly giving. people stop apprecating what you offer and start expecting it evenually you will lost sight of your own needs caught in the endless pursuit of keeping others happy while sacrificing your own happness
          </p>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="p-3 border-2 border-white rounded-lg focus:outline-none focus:border-yellow-300 bg-transparent text-white placeholder-white"
        />
        <div className="space-x-4">
          <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg">
            Red Button
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">
            Blue Button
          </button>
          <button className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg">
            Pink Button
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg">
            Yellow Button
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8 p-4 bg-gray-900 rounded-lg shadow-lg">
        <a
          href="https://github.com"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com"
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Home;
