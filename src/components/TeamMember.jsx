import React from 'react';

function TeamMember({ image, name, role }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[160px]">
      <img
        src={image}
        alt={name}
        className="w-[120px] h-[120px] object-cover rounded-full shadow-md mb-3"
      />
      <h3 className="text-lg font-semibold text-[#0d161b]">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}

export default TeamMember;
