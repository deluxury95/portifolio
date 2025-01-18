import { GiCupidonArrow } from "react-icons/gi";
import React from 'react';
import { motion } from "framer-motion";

const AboutMe = () => {
  const handleHireMeClick = () => {
    const subject = "Hiring Inquiry";
    const body = "Hello, I am interested in hiring you for a project. Please get in touch.";
    const mailtoLink = `mailto:dluxurymou@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      className="flex flex-col p-4 ml-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-8">
        <motion.div
          className="flex-1 relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-3xl font-bold text-pink-600 hover:text-4xl transition-transform duration-300 shadow-[0_0_10px_purple]"
            whileHover={{ scale: 1.2 }}
          >
            Hey I`m Deng Luxury Mou
          </motion.h1>

          <div className="relative inline-block mt-4">
            <motion.p
              className="bg-slate-100 text-2xl rounded-2xl p-4 max-w-full translate-y-2.5 z-10 relative hover: py-4 px-6 md:20 shadow-[0_0_15px_purple]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
            I`m a passionate web developer with experience in building beautiful and functional websites.
              I specialize in front-end development and enjoy creating user-friendly interfaces.
              Software engineering is the systematic application of engineering principles to the
              design, development, testing, deployment, and maintenance of software
              systems. It aims to produce reliable, efficient, and maintainable
              software that meets user needs while adhering to deadlines and budgets.
            </motion.p>
            <GiCupidonArrow
              className="absolute text-red-600 text-6xl -right-10 top-10 transform rotate-45 z-20 mr-600 ml-80"
              title="Arrow Icon"
            />
          </div>

          <div className="mt-6 space-x-4">
            <a
              href="www.linkedin.com/in/deng-luxury-mou-383710199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="https://img.icons8.com/ios/50/000000/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 inline-block"
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a
              href="https://github.com/deluxury95/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="https://img.icons8.com/ios/50/000000/github.png"
                alt="GitHub"
                className="w-8 h-8 inline-block"
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="https://img.icons8.com/ios/50/000000/twitter.png"
                alt="Twitter"
                className="w-8 h-8 inline-block"
                whileHover={{ scale: 1.2 }}
              />
            </a>
          </div>

          <motion.button
            onClick={handleHireMeClick}
            className="bg-green-800 rounded-2xl mt-6 text-white p-3 w-40 text-4xl ring-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire Me
          </motion.button>
        </motion.div>

        <motion.img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEFe22BWmnSDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1579889288579?e=2147483647&v=beta&t=UZrzS0z6w8gmV4y5IEspm2fZFkRgA494IUjM65DEjgo"
          alt="Profile"
          className="w-64 h-60 rounded-full ml-4 border-l-green-950 py-0 shadow-[0_0_10px_blue]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">My Latest Work</h2>
        <div className="grid grid-cols-3 gap-6">
          {["Project 1", "Project 2", "Project 3"].map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={`https://images.unsplash.com/photo-1489686995744-f47e995ffe61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbmclMjBsdXh1cnklMjBtb3V8ZW58MHx8MHx8fDA%3D`}
                alt={project}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600">
                  {project}
                </h3>
                <p className="text-gray-500">
                  A brief description of the project goes here. Click to learn more.
                </p>
              </div>
              <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-300">
                <a
                  href="#"
                  className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
