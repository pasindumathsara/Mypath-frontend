import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5 w-full min-h-screen bg-slate-50 mt-16">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            {/* Hero Section with Video Background */}
            <div className="relative flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 overflow-hidden">
              {/* Video background */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="src/assets/video1.mp4" type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/30 to-blue-900/80 z-10" />

              {/* Hero Content */}
              <div className="relative z-20 flex flex-col gap-2 text-center text-white">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight">
                  Unlock Your Potential
                </h1>
                <h2 className="text-sm font-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Explore courses and careers tailored to your skills and interests. Connect with opportunities in Sri Lanka's evolving job market.
                </h2>
              </div>

              {/* Search Bar */}
              <label className="relative z-20 flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16 mt-6">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#4e7997] flex border border-[#d0dde7] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search courses or careers"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d0dde7] bg-slate-50 focus:border-[#d0dde7] h-full placeholder:text-[#4e7997] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d0dde7] bg-slate-50 pr-[7px]">
                    <button
                      onClick={handleSearch}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1990e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Search</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Success Stories</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {/* Card 1 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=687&q=80"
                  alt="Sri Lankan businesswoman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#0e151b] text-base font-medium">Ayesha's Journey</p>
                <p className="text-[#4e7997] text-sm font-normal">
                  Ayesha, a recent graduate, found her dream job in marketing through CareerConnect's personalized career path.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Sri Lankan IT professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#0e151b] text-base font-medium">Rohan's Success</p>
                <p className="text-[#4e7997] text-sm font-normal">
                  Rohan, a skilled technician, advanced his career with a specialized course recommended by CareerConnect.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Group of Sri Lankan students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#0e151b] text-base font-medium">The Future Leaders</p>
                <p className="text-[#4e7997] text-sm font-normal">
                  A group of students utilized CareerConnect to explore various career options and plan their educational paths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-5 text-center">
              <h1 className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                Ready to Start Your Journey?
              </h1>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
                  <Link to="/courses">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1990e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Explore Courses</span>
                    </button>
                  </Link>
                  <Link to="/careers">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1990e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Discover Careers</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
