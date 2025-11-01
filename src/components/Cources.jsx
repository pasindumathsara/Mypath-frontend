import React, { useState } from 'react';

const CareerHub = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    industry: null,
    careerPath: null
  });
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showCareerPathDropdown, setShowCareerPathDropdown] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      description: "Learn the basics of digital marketing, including SEO, social media, and content creation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "4 weeks",
      level: "Beginner",
      industry: "Marketing",
      careerPath: "Digital Marketing",
      instructor: "Alex Johnson",
      rating: 4.7,
      students: 12500
    },
    {
      id: 2,
      title: "Project Management Essentials",
      description: "Master the key principles of project management, from planning to execution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      duration: "6 weeks",
      level: "Intermediate",
      industry: "Business",
      careerPath: "Management",
      instructor: "Sarah Williams",
      rating: 4.8,
      students: 8900
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      description: "Gain practical skills in data analysis using Python, a powerful programming language.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "8 weeks",
      level: "Intermediate",
      industry: "Technology",
      careerPath: "Data Science",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 21500
    },
    {
      id: 4,
      title: "Graphic Design for Beginners",
      description: "Explore the fundamentals of graphic design, including typography, color theory, and layout.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      duration: "5 weeks",
      level: "Beginner",
      industry: "Creative",
      careerPath: "Design",
      instructor: "Emma Rodriguez",
      rating: 4.6,
      students: 7500
    },
    {
      id: 5,
      title: "Effective Communication Skills",
      description: "Improve your communication skills for professional success, covering verbal and written communication.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      duration: "3 weeks",
      level: "Beginner",
      industry: "Business",
      careerPath: "Soft Skills",
      instructor: "David Kim",
      rating: 4.5,
      students: 10200
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = !filter.industry || course.industry === filter.industry;
    const matchesCareerPath = !filter.careerPath || course.careerPath === filter.careerPath;
    
    return matchesSearch && matchesIndustry && matchesCareerPath;
  });

  const enrollInCourse = (course) => {
    setCurrentCourse(course);
    setShowEnrollmentModal(true);
  };

  const confirmEnrollment = () => {
    if (!enrolledCourses.some(c => c.id === currentCourse.id)) {
      setEnrolledCourses([...enrolledCourses, currentCourse]);
    }
    setShowEnrollmentModal(false);
  };

  const industries = [...new Set(courses.map(course => course.industry))];
  const careerPaths = [...new Set(courses.map(course => course.careerPath))];

  const toggleIndustryDropdown = () => {
    setShowIndustryDropdown(!showIndustryDropdown);
    setShowCareerPathDropdown(false);
  };

  const toggleCareerPathDropdown = () => {
    setShowCareerPathDropdown(!showCareerPathDropdown);
    setShowIndustryDropdown(false);
  };

  const selectIndustry = (industry) => {
    setFilter({...filter, industry});
    setShowIndustryDropdown(false);
  };

  const selectCareerPath = (careerPath) => {
    setFilter({...filter, careerPath});
    setShowCareerPathDropdown(false);
  };

  const clearIndustryFilter = () => {
    setFilter({...filter, industry: null});
    setShowIndustryDropdown(false);
  };

  const clearCareerPathFilter = () => {
    setFilter({...filter, careerPath: null});
    setShowCareerPathDropdown(false);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden mt-16" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Main Content */}
      <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Title and Search Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Courses & Workshops</p>
              <p className="text-[#5d7689] text-sm font-normal leading-normal">Enhance your skills with our curated courses and workshops.</p>
            </div>

            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {/* Industry Filter */}
            <div className="relative">
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors"
                onClick={toggleIndustryDropdown}
              >
                <p className="text-[#ffff] text-sm font-medium leading-normal">
                  {filter.industry ? `Industry: ${filter.industry}` : "All Industries"}
                </p>
                <div className="text-[#5d7689]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              {showIndustryDropdown && (
                <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                  <div className="py-1">
                    {filter.industry && (
                      <button
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                        onClick={clearIndustryFilter}
                      >
                        Clear Filter
                      </button>
                    )}
                    {industries.map((industry, i) => (
                      <button
                        key={i}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          filter.industry === industry 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => selectIndustry(industry)}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Career Path Filter */}
            <div className="relative">
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors"
                onClick={toggleCareerPathDropdown}
              >
                <p className="text-[#ffff] text-sm font-medium leading-normal">
                  {filter.careerPath ? `Career Path: ${filter.careerPath}` : "All Career Paths"}
                </p>
                <div className="text-[#5d7689]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              {showCareerPathDropdown && (
                <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                  <div className="py-1">
                    {filter.careerPath && (
                      <button
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                        onClick={clearCareerPathFilter}
                      >
                        Clear Filter
                      </button>
                    )}
                    {careerPaths.map((path, i) => (
                      <button
                        key={i}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          filter.careerPath === path 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => selectCareerPath(path)}
                      >
                        {path}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Course Cards */}
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111518] text-lg font-bold leading-tight">{course.title}</p>
                      <p className="text-[#5d7689] text-sm font-normal leading-normal">{course.description}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-medium text-gray-600">By {course.instructor}</span>
                        <span className="text-xs flex items-center text-yellow-700">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {course.rating}
                        </span>
                        <span className="text-xs text-gray-600">({course.students.toLocaleString()} students)</span>
                      </div>
                      
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.duration}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{course.level}</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{course.industry}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <button 
                        className={`w-full md:w-auto flex items-center justify-center gap-2 py-2 px-6 rounded-md text-sm font-medium transition-all ${
                          enrolledCourses.some(c => c.id === course.id) 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        onClick={() => enrolledCourses.some(c => c.id === course.id) 
                          ? alert(`You're already enrolled in this course!`)
                          : enrollInCourse(course)
                        }
                      >
                        {enrolledCourses.some(c => c.id === course.id) ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Enrolled
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Enroll Now
                          </>
                        )}
                      </button>
                      
                      <button 
  className="w-full md:w-auto flex items-center justify-center gap-2 py-2 px-6 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all"
  onClick={() => window.open("https://www.coursera.org/learn/fundamentals-of-digital-marketing-smiths-copy", "_blank")}
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
  Preview Course
</button>
                    </div>
                  </div>
                  
                  <div
                    className="w-full md:w-1/3 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${course.image}")` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No courses match your filters. Try adjusting your search criteria.
            </div>
          )}
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollmentModal && currentCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Confirm Enrollment</h3>
            <p className="mb-4">You're about to enroll in: <strong>{currentCourse.title}</strong></p>
            
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Course Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Duration:</span> {currentCourse.duration}
                </div>
                <div>
                  <span className="text-gray-600">Level:</span> {currentCourse.level}
                </div>
                <div>
                  <span className="text-gray-600">Instructor:</span> {currentCourse.instructor}
                </div>
                <div>
                  <span className="text-gray-600">Rating:</span> {currentCourse.rating} ★
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 justify-end">
              <button 
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setShowEnrollmentModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                onClick={confirmEnrollment}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Confirm Enrollment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerHub;