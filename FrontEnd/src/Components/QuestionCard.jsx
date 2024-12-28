import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const QuestionCard = ({
  questionData,
  questionIndex,
  recordAnswer,
  saveAnswer,
  userAnswers
}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const optionsList = questionData.options.map((option) => option)


  const handleOptionClick = (option, answer) => {
    setSelectedOption(option)
    recordAnswer(questionIndex, option)
    saveAnswer(questionIndex, answer)
  }

  useEffect(() => {
    setSelectedOption(null)
  }, [questionIndex])

  return (
    <motion.div
      className="rounded-lg p-6 font-GoogleI text-customNavy"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-rwo justify-between">
        <h3 className="flex-1 text-l mb-4 text-customNavy opacity-50">
          Question {questionIndex + 1} / 20
        </h3>
        <span className="flex-none cursor-pointer inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          {questionData.topicTag}
        </span>
        <span className="flex-none ml-3 cursor-pointer inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          {questionData.difficultyLevel}
        </span>
      </div>
      <h2 className="text-xl mb-4 text-customNavy">{questionData.question}</h2>

      <div className="space-y-3">
        <motion.div
          className={`relative flex flex-between p-3 cursor-pointer transition-colors duration-300 border-2 border-customSage ${
            selectedOption === 'A' || userAnswers[questionIndex] === 'A'
              ? 'bg-white text-customNavy border-none shadow-xl'
              : ''
          }`}
          onClick={() => handleOptionClick('A', optionsList[0])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`bg-customNavy w-2 h-12 p-1 absolute top-0 left-0 ${
              selectedOption === 'A' || userAnswers[questionIndex] === 'A'
                ? 'show'
                : 'hidden'
            }`}
          ></div>
          <p
            className={`opacity-50 ${
              selectedOption === 'A' || userAnswers[questionIndex] === 'A'
                ? 'ml-5 opacity-100'
                : ''
            } `}
          >
            {optionsList[0]}
          </p>
          <input
            type="radio"
            name="option"
            value="Option A"
            checked={
              selectedOption === 'A' || userAnswers[questionIndex] === 'A'
            }
            onChange={(e) => handleChange(e)}
            className="form-radio h-5 w-5 cursor-pointer absolute right-5 accent-customNavy"
          />
        </motion.div>
        <motion.div
          className={`relative p-3 cursor-pointer transition-colors duration-300 border-2 border-customSage ${
            selectedOption === 'B' || userAnswers[questionIndex] === 'B'
              ? 'bg-white text-customNavy border-none shadow-xl'
              : ''
          }`}
          onClick={() => handleOptionClick('B', optionsList[1])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`bg-customNavy w-2 h-12 p-1 absolute top-0 left-0 ${
              selectedOption === 'B' || userAnswers[questionIndex] === 'B'
                ? 'show'
                : 'hidden'
            }`}
          ></div>
          <input
            type="radio"
            name="option"
            value="Option A"
            checked={
              selectedOption === 'B' || userAnswers[questionIndex] === 'B'
            }
            onChange={(e) => handleChange(e)}
            className="form-radio h-5 w-5 cursor-pointer absolute right-5 accent-customNavy"
          />
          <p
            className={`opacity-50 ${
              selectedOption === 'B' || userAnswers[questionIndex] === 'B'
                ? 'ml-5 opacity-100'
                : ''
            } `}
          >
            {optionsList[1]}
          </p>
        </motion.div>{' '}
        <motion.div
          className={`relative p-3 cursor-pointer transition-colors duration-300 border-2 border-customSage ${
            selectedOption === 'C' || userAnswers[questionIndex] === 'C'
              ? 'bg-white text-customNavy border-none shadow-xl'
              : ''
          }`}
          onClick={() => handleOptionClick('C', optionsList[2])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`bg-customNavy w-2 h-12 p-1 absolute top-0 left-0 ${
              selectedOption === 'C' || userAnswers[questionIndex] === 'C'
                ? 'show'
                : 'hidden'
            }`}
          ></div>
          <input
            type="radio"
            name="option"
            value="Option A"
            checked={
              selectedOption === 'C' || userAnswers[questionIndex] === 'C'
            }
            onChange={(e) => handleChange(e)}
            className="form-radio h-5 w-5 cursor-pointer absolute right-5 accent-customNavy"
          />
          <p
            className={`opacity-50 ${
              selectedOption === 'C' || userAnswers[questionIndex] === 'C'
                ? 'ml-5 opacity-100'
                : ''
            } `}
          >
            {' '}
            {optionsList[2]}
          </p>
        </motion.div>{' '}
        <motion.div
          className={`relative p-3 cursor-pointer transition-colors duration-300 border-2 border-customSage ${
            selectedOption === 'D' || userAnswers[questionIndex] === 'D'
              ? 'bg-white text-customNavy border-none shadow-xl'
              : ''
          }`}
          onClick={() => handleOptionClick('D', optionsList[3])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`bg-customNavy w-2 h-12 p-1 absolute top-0 left-0 ${
              selectedOption === 'D' || userAnswers[questionIndex] === 'D'
                ? 'show'
                : 'hidden'
            }`}
          ></div>
          <input
            type="radio"
            name="option"
            value="Option A"
            checked={
              selectedOption === 'D' || userAnswers[questionIndex] === 'D'
            }
            onChange={(e) => handleChange(e)}
            className="form-radio h-5 w-5 cursor-pointer absolute right-5 accent-customNavy"
          />
          <p
            className={`opacity-50 ${
              selectedOption === 'D' || userAnswers[questionIndex] === 'D'
                ? 'ml-5 opacity-100'
                : ''
            } `}
          >
            {optionsList[3]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default QuestionCard
