import React, { useState, useEffect } from 'react'

const LoadingProgressSlider = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 1
      })
    }, 720000 / 60) // Update the progress every 1/60th of a second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <div className="w-3/4 max-w-sm">
        <p className="mb-2 text-gray-600 ">
          {progress}
          <span className="text-sm">%</span>
        </p>

        <div className="bg-customSage h-3 rounded-full">
          <div
            className="bg-customNavy h-full rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingProgressSlider
