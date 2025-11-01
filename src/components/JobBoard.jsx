import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobApplyForm from './JobApplyForm';
import Header from './Header';

const JobBoard = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: null,
    industry: null,
    skills: null
  });
  const [showDropdown, setShowDropdown] = useState({
    location: false,
    industry: false,
    skills: false
  });

  const locations = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo'];
  const industries = ['Technology', 'Marketing', 'Finance', 'Healthcare', 'Education'];
  const skills = ['JavaScript', 'Python', 'Design', 'Management', 'Communication'];

  const handleApplyClick = (jobTitle, company) => {
    setSelectedJob({ title: jobTitle, company });
    setShowApplyForm(true);
  };

  const handleCloseForm = () => {
    setShowApplyForm(false);
    setSelectedJob(null);
  };

  const toggleDropdown = (filterType) => {
    setShowDropdown(prev => ({
      ...Object.fromEntries(Object.keys(prev).map(key => [key, false])),
      [filterType]: !prev[filterType]
    }));
  };

  const selectFilter = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setShowDropdown(prev => ({ ...prev, [filterType]: false }));
  };

  const clearFilter = (filterType) => {
    setFilters(prev => ({ ...prev, [filterType]: null }));
  };

  // Job Card Component
  const JobCard = ({ featured, title, company, imageUrl }) => {
    return (
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              {featured && <p className="text-[#4c799a] text-sm font-normal leading-normal">Featured</p>}
              <p className="text-[#0d161b] text-base font-bold leading-tight">{title}</p>
              <p className="text-[#4c799a] text-sm font-normal leading-normal">{company}</p>
            </div>
            <button
              onClick={() => handleApplyClick(title, company)}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7eef3] text-[#0d161b] text-sm font-medium leading-normal w-fit hover:bg-[#d0dde8] transition-colors"
            >
              <span className="truncate">Apply Now</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      {/* Header Component */}
      <Header />
      
      {/* Job Application Form Modal */}
      {showApplyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <JobApplyForm job={selectedJob} onClose={handleCloseForm} />
          </div>
        </div>
      )}

      <div className="layout-container flex h-full grow flex-col mt-16">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d161b] tracking-light text-[32px] font-bold leading-tight">Job Opportunities in Sri Lanka</p>
                <p className="text-[#4c799a] text-sm font-normal leading-normal">Explore a wide range of job openings across various industries and locations.</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#4c799a] flex border-none bg-[#e7eef3] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for jobs by title, skill, or company"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d161b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-full placeholder:text-[#4c799a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </label>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {/* Location Filter */}
              <div className="relative">
                <button 
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7eef3] pl-4 pr-2 hover:bg-[#d0dde8] transition-colors"
                  onClick={() => toggleDropdown('location')}
                >
                  <p className="text-[#ffff] text-sm font-medium leading-normal">
                    {filters.location ? `Location: ${filters.location}` : "Location"}
                  </p>
                  <div className="text-[#0d161b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
                {showDropdown.location && (
                  <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      {filters.location && (
                        <button
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                          onClick={() => clearFilter('location')}
                        >
                          Clear Filter
                        </button>
                      )}
                      {locations.map((location, i) => (
                        <button
                          key={i}
                          className={`block w-full px-4 py-2 text-sm text-left ${
                            filters.location === location 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => selectFilter('location', location)}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Industry Filter */}
              <div className="relative">
                <button 
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7eef3] pl-4 pr-2 hover:bg-[#d0dde8] transition-colors"
                  onClick={() => toggleDropdown('industry')}
                >
                  <p className="text-[#ffff] text-sm font-medium leading-normal">
                    {filters.industry ? `Industry: ${filters.industry}` : "Industry"}
                  </p>
                  <div className="text-[#0d161b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
                {showDropdown.industry && (
                  <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      {filters.industry && (
                        <button
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                          onClick={() => clearFilter('industry')}
                        >
                          Clear Filter
                        </button>
                      )}
                      {industries.map((industry, i) => (
                        <button
                          key={i}
                          className={`block w-full px-4 py-2 text-sm text-left ${
                            filters.industry === industry 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => selectFilter('industry', industry)}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills Filter */}
              <div className="relative">
                <button 
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7eef3] pl-4 pr-2 hover:bg-[#d0dde8] transition-colors"
                  onClick={() => toggleDropdown('skills')}
                >
                  <p className="text-[#ffff] text-sm font-medium leading-normal">
                    {filters.skills ? `Skills: ${filters.skills}` : "Skills"}
                  </p>
                  <div className="text-[#0d161b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
                {showDropdown.skills && (
                  <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      {filters.skills && (
                        <button
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                          onClick={() => clearFilter('skills')}
                        >
                          Clear Filter
                        </button>
                      )}
                      {skills.map((skill, i) => (
                        <button
                          key={i}
                          className={`block w-full px-4 py-2 text-sm text-left ${
                            filters.skills === skill 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => selectFilter('skills', skill)}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Featured Jobs Section */}
            <h2 className="text-[#0d161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Jobs</h2>
            
            <JobCard 
              featured 
              title="Software Engineer" 
              company="Tech Solutions Inc. - Colombo" 
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUfceljQq6RQBfklLzhr8pryt5dDZ1rWM2T45qvDD1rbhd6DhoKT-qTXeEuWAOCc8Gp84-0q8f7Pa0is9l1n7RCTqWOCxk03x_guWo9hqG_J46Nsqxd0CxsC6vZEJTxG19afiXbSWWW45FQy8U-S4_TUU96GYmd0jai-T9M57me9-EUZpXGZMu11oWedMzHj4qwljlGPhnsr4ak6CYr1t8XQ8agTTdqV1sS5k9sURoNKNpc8Ab8GHTYNZDB0XtNdrnop-LpUZH6WG6"
            />
            
            <JobCard 
              featured 
              title="Marketing Manager" 
              company="Global Marketing Ltd. - Kandy" 
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCePa_REwDa2QM2oetiqLYOyXWgRRWehgl70rdAdz9xCQmVZEyMnl1cpmvEsiQyHYyHNaMZSbFe923NLrde5kmCtAoiE6d0xyEQJZpRyDW7zb8FbZzyZQJ-jrX5OVNT0OvbVnS3omM4rQIlNM0VVEHZxH1Iyy4Ber9PMZ-UFTFEKCqcqFjK0V1yAX2SKUOFcyol0xdN8yi_ZF4zEMJbJNOBs0Mz1VENMN0pI8DXYit8NmfEauSF6A71l-8xEiPSS78s3rXxxLxaP2ze"
            />
            
            {/* Latest Jobs Section */}
            <h2 className="text-[#0d161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest Job Listings</h2>
            
            <JobCard 
              title="Data Analyst" 
              company="Data Insights Co. - Colombo" 
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAbwr4XiwdQRmC9SlaaURK08gvyegrYPzgh4SQm7snJWrcGhi203yOGNJmi6frzeiiOPsIg-p4XhOzn3d8cxaSOv_ADrliUUHFmzekJZk1WXLS2SAAgEHDeEVvw747GoMYZ9G1Nr4Tulm93H2PUDp7-buUdJzoS-RbWRhH3QO7OZ8Bl96tdWa8yBCQv8rkQCNwJ_sWFDCv5xASx7WkLNfzlDKop7UWsD0_vTefPk8wkGhIqnq_CbWPQ8Ttggfftn9MQKRZT2aGOGdSQ"
            />
            
            <JobCard 
              title="Graphic Designer" 
              company="Creative Designs Studio - Galle" 
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1o8PxvKuSeDtpWamuNRyq2nG3HGplvMUSofCoktLjx5KGPeypAE9ydRuvweUtRZZjH4AI3yNIiAfXCrQshFfBKW441Sxc5vEEFXup3N20r3OSD4XcxHbnT1RizyaIJwHUlv_sP0mmil--0RWoJhCoZq46-Rd9lRi2nvxoboB-z-0UIx2I_uawFPh9bst9zDnNXUj_7Wb7Qd-VyOzz_dJOeNeJ474-HZz3U1chgEB3ZVzvLdOclxQNIsLnqyS6rQwJCJvisr73F0"
            />
            
            <JobCard 
              title="Customer Service Representative" 
              company="Customer Care Center - Jaffna" 
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCZZijrkIPW4S4cGaZZI9hii3As2g3wrTqeJKtOo5t34LaTn1_id22CLHA2Xw7DyLnYiRpCnqMlrziv08ua06zHg0uCJ5xa-N3GzTKlCvd0gqSqF6kvlTyJkgP1VDv7xrfRrMBDRPxNypNCG0T9C4oZtoAl7Stds1XUWVbVvxDXlFzwtsJ5bOdH8-uNva5D7gW1juWLOvIDVVP6MyoQnLjzTYQRWb6QNKQAEzjrlgmF6nk50qM4QOfqSFzvzZ4Oz0A4CM8Xyl_dcV-U"
            />
            
            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#0d161b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#0d161b] rounded-full bg-[#e7eef3]" href="#">1</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d161b] rounded-full" href="#">2</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d161b] rounded-full" href="#">3</a>
              <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d161b] rounded-full">...</span>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d161b] rounded-full" href="#">10</a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#0d161b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;