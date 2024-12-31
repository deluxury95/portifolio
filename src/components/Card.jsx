import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, Icon }) => {
  return (
    <div className="bg-pink-500 rounded-lg shadow-lg p-6 max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 mt-14 w-44 h-32 ">
      <div className="flex items-center mb-4">
        <Icon className="text-blue-500 text-3xl mr-2 transition-colors duration-300 hover:text-blue-700" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,  // Expecting an icon component
};

export default Card;
