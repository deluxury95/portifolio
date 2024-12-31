import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faHtml5, faCss3Alt, faGithub } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="text-center ml-10 transition-shadow">
      <h2 className="text-3xl font-semibold text-gray-800">My Skills</h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-lime-800 shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faJsSquare} size="3x" className="text-yellow-500" />
          <span className="text-lg text-gray-700">JavaScript (ES6+)</span>
        </li>
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-pink-600 shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faReact} size="3x" className="text-cyan-400" />
          <span className="text-lg text-gray-700">React.js</span>
        </li>
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-red-700 shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-green-600" />
          <span className="text-lg text-gray-700">Node.js</span>
        </li>
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-green-400 shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-500" />
          <span className="text-lg text-gray-700">HTML & CSS</span>
        </li>
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-white shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-teal-500" />
          <span className="text-lg text-gray-700">Tailwind CSS</span>
        </li>
        <li className="flex flex-col items-center justify-center space-y-2 p-4 bg-white shadow-lg rounded-lg hover:bg-blue-50 transition-colors">
          <FontAwesomeIcon icon={faGithub} size="3x" className="text-gray-800" />
          <span className="text-lg text-gray-700">Git & GitHub</span>
        </li>
      </ul>
      <div className="mt-8 text-gray-100 text-3xl bg-purple-900 rounded-lg opacity-85">
        <p>
          I am passionate about web development and constantly strive to enhance my skills in both front-end and back-end technologies. With a strong foundation in JavaScript and frameworks like React, I create dynamic, responsive, and user-friendly interfaces. 
          My experience with Node.js enables me to build efficient and scalable server-side applications. Additionally, my proficiency in HTML, CSS, and Tailwind CSS ensures that I deliver aesthetically pleasing and mobile-first designs.
        </p>
        <p className="mt-4">
          Git and GitHub play a crucial role in my development workflow, enabling me to manage code effectively and collaborate with other developers. I am committed to continuous learning and staying updated with the latest technologies to deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default Skills;
