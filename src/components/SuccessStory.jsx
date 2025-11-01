import React from 'react';

function SuccessStory({ image, tag, title, description, reverse = false }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } bg-white shadow-md rounded-lg overflow-hidden`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-auto object-cover"
      />
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <span className="text-sm text-indigo-600 font-medium uppercase">{tag}</span>
        <h3 className="text-xl font-bold text-[#0d161b] mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default SuccessStory;
