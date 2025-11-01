import React from 'react';

function ContactInfo({ label, value }) {
  return (
    <>
      <div className="font-semibold text-[#0d161b] ">{label}</div>
      <div className="text-gray-700">{value}</div>
    </>
  );
}

export default ContactInfo;
