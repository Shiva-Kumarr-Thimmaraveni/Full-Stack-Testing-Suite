import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import LoadingProgressSlider from './../Components/LoadingProgressSlider';
import TenMinuteTimer from './../Components/TenMinuteTimer';
import QuestionCard from './../Components/QuestionCard';
import PreviousNextButtons from './../Components/PreviousNextButtons';
import FinishButton from './../Components/FinishButton';
import { useState, useEffect } from 'react';
import { QuestionsInfo } from '../questionData'
import CongratulatoryPopup from './../Components/CongratulatoryPopup';
import { act } from 'react';
import { AppContext } from '../Context/AppContext';



export default function Exams() {
  const [userInfo, setUserInfo] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [difficultyLevel, setDifficultyLevel] = useState('medium') 
  const {
    actualAnswers,
    setActualAnswers,
    showCongratsPopup,
    setShowCongratsPopup,
  } = useContext(AppContext)

  console.log(actualAnswers)

  const handleNext = () => {
    if (currentQuestionIndex < QuestionsInfo.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }

  const recordAnswer = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }))
  }
const saveAnswer = (questionIndex, answer) => {
  setActualAnswers((prevAnswers) => {
    const updatedAnswers = {
      ...prevAnswers,
      [questionIndex]: answer,
    }

    return updatedAnswers 
  })
}



  useEffect(() => {
    const data = localStorage.getItem('user-Info')
    const userData = JSON.parse(data)
    setUserInfo(userData)
  }, [])


 

  return (
    <>
      <div className="bg-customBiege h-screen">
        <Navbar profileImage={userInfo?.image} />
        {showCongratsPopup && <CongratulatoryPopup catExam={false} />}
        {showCongratsPopup === false && (
          <div>
            {/* Header Section */}
            <div className="flex flex-row items-start max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
              <div className="w-[50%] h-fit flex">
                <h2 className="text-xl font-bold text-customNavy">
                  Cumulative Exam
                </h2>

                <LoadingProgressSlider />
              </div>
              <div className="w-[50%] flex flex-row justify-end">
                <TenMinuteTimer />
              </div>
            </div>

            {/* Exam Section */}
            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 mt-4">
              <QuestionCard
                questionData={QuestionsInfo[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                recordAnswer={recordAnswer}
                saveAnswer={saveAnswer}
                userAnswers={userAnswers}
              />
              <div className="flex flex-row max-w-5xl mx-auto sm:px-6 lg:px-8 mt-4 ">
                <div className="w-[50%] ">
                  <PreviousNextButtons
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    disableNext={
                      currentQuestionIndex === QuestionsInfo.length - 1
                    }
                    disablePrevious={currentQuestionIndex === 0}
                  />
                </div>
                <div className="w-[50%] flex justify-end">
                  <FinishButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
