import React, { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  };

  return (
    <div
      className={`min-h-screen overflow-auto ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Toggle Button */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-md ${
            darkMode ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="text-center py-10 shadow-[0_0_10px_purple]">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <form className="mt-6 max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`p-2 w-full border rounded-md ${
                darkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <input
              type="email"
              placeholder="Your Email"
              className={`p-2 w-full border rounded-md ${
                darkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className={`p-2 w-full border rounded-md ${
                darkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300"
              }`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <textarea
              placeholder="Your Message"
              className={`p-2 w-full border rounded-md ${
                darkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300"
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold">More Ways to Reach Me</h3>
          <p className="mt-4">
            Feel free to get in touch via email, phone, or visit us at our
            office. We're here to help!
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Image with Hover Effect */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1469796466635-455ede028aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbmclMjBsdXh1cnklMjBtb3V8ZW58MHx8MHx8fDA%3D"
                alt="Dengdit website"
                className="w-64 h-64 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 shadow-[0_0_10px_purple]">
                <p className="text-white text-lg font-semibold">Visit Us</p>
              </div>
            </div>
            <div className="text-left">
              <p>
                <strong>Phone:</strong> +250727567338
              </p>
              <p>
                <strong>Email:</strong> dluxurymou@gmail.com
              </p>
              <p>
                <strong>Address:</strong> 123 Main Street, Anytown, Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
