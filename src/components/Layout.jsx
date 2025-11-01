// src/components/Layout.jsx
import { useLocation } from 'react-router-dom';
import ChatIcon from './ChatIcon'; // Add this import

const Layout = ({ children }) => {
  const location = useLocation();
  const isChatPage = location.pathname === '/chatai'; // Match your route

  return (
    <div className="relative min-h-screen">
      {children}
      {!isChatPage && <ChatIcon />}
    </div>
  );
};

export default Layout;