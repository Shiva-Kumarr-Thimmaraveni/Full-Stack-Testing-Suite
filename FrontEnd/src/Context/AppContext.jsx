// src/context/ThemeContext.js
import React, { createContext, useState } from 'react'

// Create a context
export const AppContext = createContext()

// Create a provider component
export const AppProvider = ({ children }) => {

    const [actualAnswers, setActualAnswers]  = useState({})
    const [showCongratsPopup, setShowCongratsPopup] = useState(false)
    const [testCompleted, setTestCompleted] = useState(false)
    const [catPercentage, setCatPercentage] = useState(0)
    const [catCorrectAnswers, setCatCorrectAnswers] = useState(0)

  return (
    // Provide the context value to all children
    <AppContext.Provider
      value={{
        actualAnswers,
        setActualAnswers,
        showCongratsPopup,
        setShowCongratsPopup,
        testCompleted,
        setTestCompleted,
        catPercentage,
        setCatPercentage,
        catCorrectAnswers,
        setCatCorrectAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
