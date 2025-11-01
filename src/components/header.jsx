import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // You can implement your search logic here.
      // For example, navigate to a search results page:
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-solid border-amber-50 px-10 py-3 w-full bg-blue-50">
      <div className="flex items-center gap-9">
        <img src={logo} alt="logo" width={48} height={48} />
        <Link to="/" className="[&_h2]:hover:no-underline">
          <h2 className="text-[#003666] text-lg font-bold leading-tight tracking-[-0.015em]">MyPath</h2>
        </Link>
        
        <div className="flex items-center gap-10">
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Courses
          </Link>
          <Link to="/careers" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Careers
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            CV Builder
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-5 items-center">
        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="flex w-full max-w-sm">
          <label className="flex w-full items-stretch rounded-xl h-10">
            <div className="text-[#00355b] flex items-center justify-center pl-4 rounded-l-xl border-r-0 bg-[#e7eef3] border-none">
              <Search size={20} className="text-[#00355b]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="form-input flex w-full flex-1 rounded-r-xl border-none bg-[#e7eef3] px-4 text-[#003564] placeholder:text-[#4e7997] focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>
        </form>

        {/* Auth buttons */}
        <div className="flex gap-5">
          <button 
            onClick={() => navigate('/signup')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#128ee7] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0d7bc7] transition-colors"
          >
            <span className="truncate">Sign Up</span>
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef3] text-[#003564] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d0d8e0] transition-colors"
          >
            <span className="truncate">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
