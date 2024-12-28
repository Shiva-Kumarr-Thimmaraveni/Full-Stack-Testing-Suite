import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import HeaderSection from '../Components/HeaderSection'
import axios from 'axios'

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState(null)
  


    useEffect(() => {
      const data = localStorage.getItem('user-Info')
      const userData = JSON.parse(data)
      setUserInfo(userData)

    }, [])







  return (
    <>
      <div className="bg-customBiege h-screen overflow-y-auto custom-scrollbar">
        <Navbar
          profileImage={
            userInfo?.image ||
            'https://avatar.iran.liara.run/public/boy?username=Ash'
          }
        />
        <HeaderSection username={userInfo?.name} />
      </div>
    </>
  )
}
