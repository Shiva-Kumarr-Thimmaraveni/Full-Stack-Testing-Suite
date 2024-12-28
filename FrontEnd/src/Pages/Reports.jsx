import React from 'react'
import Navbar from '../Components/Navbar'
import ReportsPage from '../Components/ReportsPage.jsx'
import { useState, useEffect } from 'react'


export default function Reports() {

  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('user-Info')
    const userData = JSON.parse(data)
    setUserInfo(userData)
  }, [])


  return (
    <>
      <div className="bg-customBiege h-fit">
        <Navbar profileImage={userInfo?.image} />

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
          <ReportsPage />
        </div>
      </div>
    </>
  )
}
