import React from 'react';
import { GiCupidonArrow } from "react-icons/gi";

const AboutMe = () => {
  const handleHireMeClick = () => {
    const subject = "Hiring Inquiry";
    const body = "Hello, I am interested in hiring you for a project. Please get in touch.";
    const mailtoLink = `dluxurymou@gmail.com${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col p-4 ml-80">
      <div className="flex mb-8">
        <div className="flex-1 relative">
          <h1 className="text-3xl font-bold text-pink-600 hover:text-4xl transition-transform duration-300">
            Deng luxury mou
          </h1>
          <div className="relative inline-block mt-4">
            <p className="bg-slate-100 text-2xl rounded-2xl p-4 max-w-full translate-y-2.5 z-10 relative hover:text-2xl transition-transform duration-300">
              I'm a passionate web developer with experience in building beautiful and functional websites.
              I specialize in front-end development and enjoy creating user-friendly interfaces.
              frameworks and databases like Node.js, Django, or MySQL. Their expertise ensures websites are fast, secure, and able to handle large volumes of traffic.

Full-stack developers are skilled in both front-end and back-end development, making them versatile and highly sought-after professionals. They can handle
            </p>
            <GiCupidonArrow
              className="absolute text-black-600 text-6xl -right-10 top-10 transform rotate-45 z-20 mr-96"
              title="Arrow Icon"
            />
          </div>

          <div className="mt-6 space-x-4">
            <a href="www.linkedin.com/in/deng-luxury-mou-383710199" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios/50/000000/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 inline-block"
              />
            </a>
            <a href="https://github.com/deluxury95/your-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios/50/000000/github.png"
                alt="GitHub"
                className="w-8 h-8 inline-block"
              />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios/50/000000/twitter.png"
                alt="Twitter"
                className="w-8 h-8 inline-block"
              />
            </a>
          </div>

          <button
            onClick={handleHireMeClick}
            className="bg-green-800 rounded-2xl mt-6 text-white p-3 w-40 text-4xl ring-8"
          >
            Hire Me
          </button>
        </div>

        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEFe22BWmnSDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1579889288579?e=2147483647&v=beta&t=UZrzS0z6w8gmV4y5IEspm2fZFkRgA494IUjM65DEjgo"
          alt="Profile"
          className="w-48 h-48 rounded-full ml-4 border-l-green-950"
        />
      </div>

      {/* Latest Work Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">My Latest Work</h2>
        <div className="grid grid-cols-3 gap-6">
          {["Project 1", "Project 2", "Project 3"].map((project, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={`https://images.unsplash.com/photo-1489686995744-f47e995ffe61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbmclMjBsdXh1cnklMjBtb3V8ZW58MHx8MHx8fDA%3D${encodeURIComponent(project)}`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
