import React from 'react'
import { Home } from 'lucide-react'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-customBiege flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <div className="relative">
          {/* Animated 404 Text */}
          <h1
            className="text-9xl font-extrabold text-customNavy opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            animate-pulse-slow"
          >
            404
          </h1>

          {/* Floating Illustration */}
          <div className="relative z-10">
            <div className="animate-float">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="mx-auto h-64 w-64"
              >
                <path
                  d="M100 20 L150 100 L100 180 L50 100 Z"
                  fill="#2A3663"
                  className="animate-wiggle"
                />
                <circle cx="100" cy="100" r="30" fill="#D8DBBD" />
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  fill="#2A3663"
                  fontSize="20"
                >
                  Oops!
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mt-24 space-y-4">
          <h2 className="text-3xl font-bold text-customNavy">Page Not Found</h2>
          <p className="text-customNavy text-lg">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>

          {/* Home Button */}
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-customNavy text-white 
              rounded-full hover:bg-customSage hover:border-2 hover:border-customNavy hover:text-customNavy transition-all duration-300 
              transform hover:-translate-y-1 hover:scale-105 shadow-lg"
            >
              <Home className="mr-2" />
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
