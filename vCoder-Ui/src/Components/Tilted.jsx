import React from 'react';
import { Link } from 'react-router-dom';

function TiltedCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-7 py-10">
      
      {/* vCode CLI Card */}
      <Link to="/cli" className="w-80 transform -rotate-3">
        <div
          className="backdrop-blur-md bg-black bg-opacity-40 rounded-2xl shadow-2xl p-6 h-56 flex flex-col items-center justify-center text-center space-y-3 border border-gray-600 hover:scale-105 transition duration-300 ease-in-out" style={{
      backgroundColor: "rgba(0,0,0,0.3)",
      borderColor: "rgba(0,0,0,0.6)"
    }}>
          <div className="text-5xl">⚡</div>
          <div className="text-2xl font-bold text-white">vCode CLI</div>
          <p className="text-sm text-gray-200">
            Generate production websites instantly with AI-powered CLI commands.
          </p>
        </div>
      </Link>

      {/* vCode WEB Card */}
      <Link to="/web" className="w-80 transform rotate-3">
        <div
          className="backdrop-blur-md  rounded-2xl shadow-2xl p-6 h-56 flex flex-col items-center justify-center text-center space-y-3 border border-gray-600 hover:scale-105 transition duration-300 ease-in-out"style={{
      backgroundColor: "rgba(0,0,0,0.3)",
      borderColor: "rgba(0,0,0,0.6)"
    }}>
          <div className="text-5xl">🌐</div>
          <div className="text-2xl font-bold text-white">vCode WEB</div>
          <p className="text-sm text-gray-200">
            Build, preview, and deploy websites directly in your browser sandbox.
          </p>
        </div>
      </Link>

    </div>
  );
}

export default TiltedCards;
