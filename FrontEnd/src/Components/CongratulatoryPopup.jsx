import React, { useContext, useState } from 'react'
import Confetti from 'react-confetti'
import {motion, AnimatePresence} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
const CongratulatoryPopup = ({ catExam }) => {
  const Navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(true)
  const [showConfetti, setShowConfetti] = useState(true)
  const { catPercentage, catCorrectAnswers } = useContext(AppContext)

  const navigateToReports = () => {
    setShowPopup(false)
    setShowConfetti(false)


    Navigate('/reports')
  }

  const navigateToDashboard = () => {
     setShowPopup(false)
     setShowConfetti(false)
     Navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 relative overflow-hidden text-customNavy">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* Popup */}

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="bg-yellow-400 rounded-full p-3 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2 font-GoogleI">
                  Congratulations!
                </h2>
                {catExam ? (
                  <div className="mb-3 font-GoogleI text-center">
                    <h2>Test Completed!</h2>
                    <p>
                      Correct Answers: <strong>{catCorrectAnswers}/20</strong>
                    </p>
                    <p>
                      Score Percentage: <strong>{catPercentage}%</strong>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 mb-4 text-center">
                    You have attempted all questions.
                    <br />
                    Are you ready to see your results !?
                  </p>
                )}

                {catExam ? (
                  <motion.button
                    className="bg-customNavy hover:bg-customBiege text-white hover:text-customNavy hover:border-2 hover:border-customNavy font-bold py-2 px-4 rounded font-GoogleI"
                    onClick={() => navigateToDashboard()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Other Exams
                  </motion.button>
                ) : (
                  <motion.button
                    className="bg-customNavy hover:bg-customBiege hover:border-2 hover:border-customNavy hover:text-customNavy text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigateToReports()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Proceed Further
                  </motion.button>
                )}
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Balloons */}
      {showPopup &&
        Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className={`absolute bottom-[-100px] w-10 h-14 rounded-full ${
              index % 5 === 0
                ? 'bg-red-400'
                : index % 5 === 1
                ? 'bg-yellow-400'
                : index % 5 === 2
                ? 'bg-blue-400'
                : index % 5 === 3
                ? 'bg-green-400'
                : 'bg-purple-400'
            } animate-float left-[${(index + 1) * 10}%]`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
    </div>
  )
}

export default CongratulatoryPopup
