import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.png'; // adjust the path based on your project structure

function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-pink-400 shadow-md py-4 px-6 flex items-center justify-between">
      
      {/* Left side: Logo + Brand */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={Logo} alt="Logo" className="h-10 w-10 object-contain rounded-full shadow" />
        <span className="text-2xl font-bold text-blue-600">vCode</span>
      </Link>

      {/* Right side: Navigation */}
      <nav className="flex space-x-6">
        <Link to="/" className="text-xl text-gray-700 hover:text-orange-700">
          Home
        </Link>
        <Link to="/cli" className="text-xl text-gray-700 hover:text-orange-700">
          CLI
        </Link>
        <Link to="/web" className="text-xl text-gray-700 hover:text-orange-700">
          Sandbox
        </Link>
      </nav>
    </header>
  );
}

export default Header;
