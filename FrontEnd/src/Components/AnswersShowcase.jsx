import React, { useContext, useState } from 'react'
import { QuestionsInfo } from '../questionData'
import { AppContext } from '../Context/AppContext'

export default function () {
const {actualAnswers} = useContext(AppContext)
  
  return (
    <>
      <div className="p-4 font-GoogleI">
        <h2 className='font-GoogleI font-bold m-3 text-customNavy hover:text-green-500 w-fit cursor-pointer'>All Correct Answers</h2>
        {QuestionsInfo.map((questionData, index) => (
          <div
            key={index}
            className="p-4 mb-6 border border-gray-300 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2 text-customNavy">{`${index + 1}. ${
              questionData.question
            }`}</h3>
            <div className="flex flex-col space-y-2">
              {questionData.options.map((option, optIndex) => {
                // Correct Answer Check
                const isCorrect = option === questionData.correctAnswer
                // User Answer Check
                const isUserAnswer = option === actualAnswers[index]
                

                return (
                  <div
                    key={optIndex}
                    className={`px-3 py-2 rounded-lg ${
                      isCorrect
                        ? 'bg-customNavy text-white font-semibold'
                        : !isUserAnswer
                        ? 'bg-customBiege text-customNavy font-semibold'
                        : 'bg-orange-200 text-customNavy'
                    }`}
                  >
                    {option}
                  </div>
                )
              })}
            </div>
            <div className="mt-3 text-sm text-gray-500">
              <span className="mr-2">Topic: {questionData.topicTag}</span>
              <span>Difficulty: {questionData.difficultyLevel}</span>
            </div>
          </div>
        ))}
      </div>

 
    </>
  )
}
