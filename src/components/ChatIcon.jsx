// src/components/ChatIcon.jsx
import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChatIcon = () => {
  return (
    <Link to="/chatai" className="fixed bottom-8 right-8 z-50">
      <div className="bg-[#003457] hover:bg-[#6070b7] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
        <FaCommentDots size={28} />
        <span className="sr-only">Chat with AI</span>
      </div>
    </Link>
  );
};

export default ChatIcon;