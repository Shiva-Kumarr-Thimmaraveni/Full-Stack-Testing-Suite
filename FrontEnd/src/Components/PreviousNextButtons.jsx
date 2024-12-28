import React, { useState } from 'react'


const PreviousNextButtons = ({ onPrevious, onNext }) => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType)
    if (buttonType === 'previous') {
      onPrevious()
    } else {
      onNext()
    }
  }

  return (
    <div className="flex justify-center items-start gap-6 font-GoogleI">
      {/* Previous Button */}
      <button
        onClick={() => handleButtonClick('previous')}
        className="flex items-center justify-center pr-5 text-customNavy bg-customBiege font-medium rounded-full shadow-md transition-all duration-300 hover:bg-gray-200 active:scale-95"
      >
        <div
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-300 ${
            selectedButton === 'previous' ? 'bg-customNavy' : 'bg-white'
          }`}
        >
          <span
            className={`material-icons-outlined text-lg ${
              selectedButton === 'previous' ? 'text-white' : 'text-customNavy'
            }`}
          >
            arrow_back
          </span>
        </div>
        <span className="ml-2">Previous</span>
      </button>

      {/* Next Button */}
      <button
        onClick={() => handleButtonClick('next')}
        className="flex items-center justify-center pl-5 text-customNavy bg-customBiege font-medium rounded-full shadow-md transition-all duration-300 hover:bg-gray-200 active:scale-95"
      >
        <span className="mr-2">Next</span>
        <div
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-300 ${
            selectedButton === 'next' ? 'bg-customNavy' : 'bg-white'
          }`}
        >
          <span
            className={`material-icons-outlined text-lg ${
              selectedButton === 'next' ? 'text-white' : 'text-customNavy'
            }`}
          >
            arrow_forward
          </span>
        </div>
      </button>
    </div>
  )
}

export default PreviousNextButtons
