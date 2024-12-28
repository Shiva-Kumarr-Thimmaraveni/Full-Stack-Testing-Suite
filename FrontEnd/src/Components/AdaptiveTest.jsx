import React, { useContext, useState } from 'react'
import { QuestionsInfo } from '../questionData'
import { motion } from 'framer-motion'
import { AppContext } from '../Context/AppContext'


const AdaptiveTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const {
    testCompleted,
    setTestCompleted,
    catPercentage,
    setCatPercentage,
    setCatCorrectAnswers,
  } = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState(null)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  // Function to determine the next question index
  const getNextQuestionIndex = (currentDifficulty, isCorrect, answered) => {
    let nextDifficulty

    // Adjust difficulty based on correctness
    if (isCorrect) {
      nextDifficulty = currentDifficulty === 'easy' ? 'medium' : 'hard'
    } else {
      nextDifficulty = currentDifficulty === 'hard' ? 'medium' : 'easy'
    }

    // Find the next unanswered question with the desired difficulty
    for (let i = 0; i < QuestionsInfo.length; i++) {
      if (
        QuestionsInfo[i].difficultyLevel === nextDifficulty &&
        !answered.some((ans) => ans.index === i)
      ) {
        return i
      }
    }

    // If no question with the desired difficulty is available, find any unanswered question
    for (let i = 0; i < QuestionsInfo.length; i++) {
      if (!answered.some((ans) => ans.index === i)) {
        return i
      }
    }

    return null // All questions answered
  }

  /**
   *   ? for setting values in App Context ?
   *  *********************************************
   */
   function setCatPercentageFunction(percentage) {
     setCatPercentage(percentage)
   }

   function setCatCorrectAnswersFunction(correctAnswers) {
     setCatPercentageFunction(percentage)
   }
   /**
    * ********************************************
    */



  // Handle answer selection
  const handleAnswer = (selectedAnswer) => {
    const isCorrect =
      selectedAnswer === QuestionsInfo[currentIndex].correctAnswer

    // Set feedback message
    setFeedbackMessage(
      isCorrect
        ? 'The option you selected is correct!'
        : 'The option you selected is wrong.'
    )

    // Temporarily create the updated answered list for the next step
    const updatedAnsweredQuestions = [
      ...answeredQuestions,
      {
        index: currentIndex,
        question: QuestionsInfo[currentIndex].question,
        isCorrect,
      },
    ]

    setSelectedOption(selectedAnswer)

    // Wait for a moment to show the feedback before moving to the next question
    setTimeout(() => {
      const nextQuestionIndex = getNextQuestionIndex(
        QuestionsInfo[currentIndex].difficultyLevel,
        isCorrect,
        updatedAnsweredQuestions
      )

      setAnsweredQuestions(updatedAnsweredQuestions)
      setSelectedOption(null)
      setFeedbackMessage('')

      if (nextQuestionIndex !== null) {
        setCurrentIndex(nextQuestionIndex)
      } else {
        setTestCompleted(true)
      }
    }, 2000) // 2 seconds delay to show feedback
  }

  // Calculate score and percentage
  const correctAnswers = answeredQuestions.filter((ans) => ans.isCorrect).length
  const totalQuestions = QuestionsInfo.length
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2)
 
  setCatPercentageFunction(percentage)
  setCatCorrectAnswersFunction(correctAnswers)

  return (
    <>
      <motion.div
        className="rounded-lg p-6 font-GoogleI text-customNavy ml-auto mr-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-rwo justify-between">
          <h3 className="flex-1 text-l mb-4 text-customNavy opacity-50">
            Question {currentIndex + 1} / 20
          </h3>
          <span className="flex-none cursor-pointer inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
            {QuestionsInfo[currentIndex].topicTag}
          </span>
          <span className="flex-none ml-3 cursor-pointer inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
            {QuestionsInfo[currentIndex].difficultyLevel}
          </span>
        </div>
        <h2 className="text-xl mb-4 text-customNavy">
          {QuestionsInfo[currentIndex].question}
        </h2>

        <div className="space-y-3 relative">
          {QuestionsInfo[currentIndex].options.map((option, index) => (
            <motion.button
              key={index}
              className={`relative flex flex-between p-3 cursor-pointer transition-colors duration-300 w-[100%] border-2 border-spacing-4 bg-white ${
                selectedOption
                  ? option === QuestionsInfo[currentIndex].correctAnswer
                    ? 'text-white border-none'
                    : option === selectedOption
                    ? 'text-white border-none'
                    : ''
                  : ''
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption} // Disable buttons after selection
              style={{
                backgroundColor: selectedOption
                  ? option === QuestionsInfo[currentIndex].correctAnswer
                    ? '#4dff88'
                    : option === selectedOption
                    ? ' #ff4d4d'
                    : ''
                  : '',
                cursor: selectedOption ? 'not-allowed' : 'pointer',
              }}
            >
              <p>{option}</p>
            </motion.button>
          ))}
        </div>

        {feedbackMessage && (
          <p className="mt-3 bg-customBiege rounded-lg p-2 w-fit text-start shadow-md shadow-customNavy text-customNavy absolute -bottom-[2rem] left-[3rem]">
            {feedbackMessage}
          </p>
        )}
      </motion.div>
    </>
  )
}

export default AdaptiveTest
