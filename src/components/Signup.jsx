import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SignUpForm = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 items-center justify-center mt-16"
      style={{
        fontFamily: '"Public Sans", "Noto Sans", sans-serif',
        '--select-button-svg':
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(76,121,154)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <div className="w-full max-w-xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          <h2 className="text-[#0d161b] text-2xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          <div className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label className="block text-[#0d161b] text-sm font-medium mb-1">Full Name</label>
              <input
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg text-[#000000] bg-[#e7eef3] placeholder:text-[#4c799a] focus:outline-none focus:ring-2 focus:ring-[#128ee7]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[#0d161b] text-sm font-medium mb-1">Email</label>
              <input
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-[#000000] bg-[#e7eef3] placeholder:text-[#4c799a] focus:outline-none focus:ring-2 focus:ring-[#128ee7]"
              />
            </div>

            {/* Educational Background Field */}
            <div>
              <label className="block text-[#0d161b] text-sm font-medium mb-1">Educational Background</label>
              <select
                className="w-full px-4 py-3 rounded-lg text-[#101946] bg-[#e7eef3] bg-[image:--select-button-svg] bg-no-repeat bg-[center_right_1rem] appearance-none focus:outline-none focus:ring-2 focus:ring-[#128ee7]"
              >
                <option value="">Select your educational background</option>
                <option value="highschool">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[#0d161b] text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg text-[#000000] bg-[#e7eef3] placeholder:text-[#4c799a] focus:outline-none focus:ring-2 focus:ring-[#128ee7]"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-[#0d161b] text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-lg text-[#000000] bg-[#e7eef3] placeholder:text-[#4c799a] focus:outline-none focus:ring-2 focus:ring-[#128ee7]"
              />
            </div>

            {/* Sign Up Button */}
            <button className="w-full py-3 px-4 bg-[#128ee7] text-white font-bold rounded-lg hover:bg-[#0d7bc7] transition-colors mt-6">
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              {/* Google */}
              <button className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
                <FaGoogle className="text-red-500 text-xl" />
              </button>
              
              {/* Facebook */}
              <button className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
                <FaFacebookF className="text-blue-600 text-xl" />
              </button>
              
              {/* LinkedIn */}
              <button className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
                <FaLinkedinIn className="text-blue-700 text-xl" />
              </button>
            </div>

            {/* Login Link */}
            <p className="text-[#4c799a] text-sm text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-700 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;