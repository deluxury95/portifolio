import React, { useState } from 'react';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name} with email ${email} and phone number ${phoneNumber}`);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
      <form className="mt-6 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 w-full border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-full border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-2 w-full border border-gray-300 rounded-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="p-2 w-full border border-gray-300 rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Send Message
        </button>
      </form>

      {/* Additional Contact Information Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-700">More Ways to Reach Me</h3>
        <p className="mt-4 text-gray-600">
          Feel free to get in touch via email, phone, or visit us at our office. We're here to help!
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image with Hover Effect */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1469796466635-455ede028aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbmclMjBsdXh1cnklMjBtb3V8ZW58MHx8MHx8fDA%3D" 
              alt="Dengdit website"
              className="w-64 h-64 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Visit Us</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-gray-700">
              <strong>Phone:</strong> +250727567338
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> dluxurymou@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Main Street, Anytown, Rwanda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
