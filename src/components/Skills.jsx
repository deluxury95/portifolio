import {
  faAngular,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills = () => {
  return (
    <div className="text-center ml-10 transition-shadow max-w-screen-xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">My Skills</h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 shadow-lg p-4">
        {/* JavaScript */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-lime-800 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faJsSquare} size="4x" className="text-yellow-500" />
          <span className="text-xl text-gray-700">JavaScript (ES6+)</span>
        </li>
        {/* React */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-pink-600 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faReact} size="4x" className="text-cyan-400" />
          <span className="text-xl text-gray-700">React.js</span>
        </li>
        {/* Node.js */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-red-700 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faNodeJs} size="4x" className="text-green-600" />
          <span className="text-xl text-gray-700">Node.js</span>
        </li>
        {/* HTML & CSS */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-green-400 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="text-orange-500" />
          <span className="text-xl text-gray-700">HTML & CSS</span>
        </li>
        {/* CSS3 */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-blue-600 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-white" />
          <span className="text-xl text-gray-700">CSS3</span>
        </li>
        {/* Git */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-gray-700 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faGitAlt} size="4x" className="text-orange-500" />
          <span className="text-xl text-gray-700">Git & GitHub</span>
        </li>
        {/* Docker */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-blue-500 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faDocker} size="4x" className="text-white" />
          <span className="text-xl text-gray-700">Docker</span>
        </li>
        {/* Angular */}
        <li className="flex flex-col items-center justify-center space-y-2 p-6 bg-red-500 shadow-xl rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105">
          <FontAwesomeIcon icon={faAngular} size="4x" className="text-white" />
          <span className="text-xl text-gray-700">Angular</span>
        </li>
      </ul>
      <div className="mt-10 text-gray-100 text-xl bg-purple-900 rounded-lg opacity-85 shadow-[0_0_10px_green] p-6">
        <p>
          I am passionate about web development and constantly strive to enhance my skills in both front-end and back-end technologies. With a strong foundation in JavaScript and frameworks like React, I create dynamic, responsive, and user-friendly interfaces. 
          My experience with Node.js enables me to build efficient and scalable server-side applications. Additionally, my proficiency in HTML, CSS, and Tailwind CSS ensures that I deliver aesthetically pleasing and mobile-first designs.
        </p>
        <p className="mt-4">
          Git and GitHub play a crucial role in my development workflow, enabling me to manage code effectively and collaborate with other developers. I am committed to continuous learning and staying updated with the latest technologies to deliver high-quality solutions.
        </p>
        <p className="mt-4">
          I also have hands-on experience with Docker to containerize applications, ensuring smooth and consistent deployments across different environments. Additionally, I have been exploring Angular for building enterprise-level applications with scalable architectures.
        </p>
      </div>
    </div>
  );
};

export default Skills;
