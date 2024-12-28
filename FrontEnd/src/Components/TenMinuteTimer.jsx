import React, { useState, useEffect } from 'react'
import { Clock3} from 'lucide-react'

const TenMinuteTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(1200) 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60

  return (
    <div className="flex items-center gap-3 w-fit">
      <div className="bg-customSage bg-opacity-50 p-2 rounded-lg text-customNavy">
        <Clock3 size={24} />
      </div>
      <div className="text-l text-customNavy">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')} Min
      </div>
    </div>
  )
}

export default TenMinuteTimer
