import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import LoadingProgressSlider from './../Components/LoadingProgressSlider'
import TenMinuteTimer from './../Components/TenMinuteTimer'
import { useState, useEffect } from 'react'
import CongratulatoryPopup from './../Components/CongratulatoryPopup'
import AdaptiveTest from '../Components/AdaptiveTest'
import { AppContext } from '../Context/AppContext'


export default function CATExams() {
    const [userInfo, setUserInfo] = useState(null)
    const { testCompleted } = useContext(AppContext)


    useEffect(() => {
        const data = localStorage.getItem('user-Info')
        const userData = JSON.parse(data)
        setUserInfo(userData)
    }, [])

       

 
  return (
    <>
      <div className="bg-customBiege h-screen">
        <Navbar profileImage={userInfo?.image} />

        {testCompleted ? (
          <CongratulatoryPopup catExam = {true} />
        ) : (
          <div>
            {/* Header Section */}
            <div className="flex flex-row items-start max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
              <div className="w-[50%] h-fit flex">
                <h2 className="text-xl font-bold text-customNavy w-[10rem]">
                  CAT Exams
                </h2>

                <LoadingProgressSlider />
              </div>
              <div className="w-[50%] flex flex-row justify-end">
                <TenMinuteTimer />
              </div>
            </div>

            {/* Exam Section */}
            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 mt-4 relative">
              <AdaptiveTest />

            </div>
          </div>
        )}
      </div>
    </>
  )
}
