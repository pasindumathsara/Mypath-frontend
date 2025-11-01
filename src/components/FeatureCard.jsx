import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Presentation,
  Users,
  Search,
  UserCircle,
  LineChart,
  Bookmark,
} from 'lucide-react';

const iconMap = {
  GraduationCap: <GraduationCap size={32} className="text-blue-700" />,
  Briefcase: <Briefcase size={32} className="text-blue-700" />,
  PresentationChart: <Presentation size={32} className="text-blue-700" />,
  UsersThree: <Users size={32} className="text-blue-700" />,
  MagnifyingGlass: <Search size={32} className="text-blue-700" />,
  UserCircle: <UserCircle size={32} className="text-blue-700" />,
  ChartLine: <LineChart size={32} className="text-blue-700" />,
  Bookmark: <Bookmark size={32} className="text-blue-700" />,
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-3">{iconMap[icon]}</div>
      <h3 className="text-[#003666] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
