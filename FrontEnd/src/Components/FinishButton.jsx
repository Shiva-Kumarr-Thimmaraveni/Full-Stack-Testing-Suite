import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'


const FinishButton = () => {
  const { actualAnswers, setShowCongratsPopup } = useContext(AppContext)

  const NavigateToReports =() => {
    if((Object.keys(actualAnswers).length) === 20){
   
    setShowCongratsPopup(true)

    }
    else{
      setShowCongratsPopup(false)
      alert('Answer all questions to proceed!')
    }

  }
 
  return (
    <button
      onClick={() => NavigateToReports()}
      className="bg-customNavy text-white font-medium py-2 px-8 rounded-full shadow-md transition-all duration-300 hover:bg-customBiege hover:text-customNavy active:scale-95 font-GoogleI h-fit"
    >
      Finish
    </button>
  )
}

export default FinishButton
