import React, { useState, useEffect, useContext } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { motion } from 'framer-motion'
import { QuestionsInfo } from './../questionData';
import AnswersShowcase from './AnswersShowcase';
import { AppContext } from '../Context/AppContext';
import * as XLSX from 'xlsx'


const ReportsPage = () => {
  const userDetails = JSON.parse(localStorage.getItem('user-Info')) || {}
  const { actualAnswers } = useContext(AppContext)

  const [quizAttempts, setQuizAttempts] = useState(0)
  const [highestMarks, setHighestMarks] = useState(20)
  const [candidateName, setCandidateName] = useState('Shiva Kumar')
  const [averageTime, setAverageTime] = useState('10min')
  const [quizName, setQuizName] = useState('Cumulative Test')
  const [chartData, setChartData] = useState([
    { date: '1/20', value: 50 },
    { date: '2/20', value: 50 },
    { date: '3/20', value: 50 },
    { date: '4/20', value: 50 },
    { date: '5/20', value: 50 },
    { date: '6/20', value: 50 },
    { date: '7/20', value: 50 },
    { date: '8/20', value: 50 },
    { date: '9/20', value: 50 },
    { date: '10/20', value: 50 },
    { date: '11/20', value: 50 },
    { date: '12/20', value: 50 },
    { date: '13/20', value: 50 },
    { date: '14/20', value: 50 },
    { date: '15/20', value: 50 },
    { date: '16/20', value: 50 },
    { date: '17/20', value: 50 },
    { date: '18/20', value: 50 },
    { date: '19/20', value: 50 },
    { date: '20/20', value: 50 },
  ])

  const calculateMarks = (actualAnswers, highestMarks) => {
    let totalMarks = 0

    // Loop through each question and compare the user answer with the correct answer
    for (let i = 0; i < highestMarks; i++) {
      // If user answer matches correct answer, add 100 marks, else add 50
      if (QuestionsInfo[i].correctAnswer === actualAnswers[i]) {
        totalMarks += 100
      } else {
        totalMarks += 50
      }
    }
    // Return the total marks out of highestMarks
    return totalMarks
  }


useEffect(() => {
  setCandidateName(userDetails['name'])
  const attempted = Object.keys(actualAnswers).length
  setQuizAttempts(attempted)

}, [])

useEffect(() => {
   const updatedChartData = chartData.map((data, index) => {
     const correctAnswer = QuestionsInfo[index]?.correctAnswer
     const userAnswer = actualAnswers[index]

     return {
       ...data,
       value: userAnswer === correctAnswer ? 100 : 50,
     }
   })

   setChartData(updatedChartData)
}, [actualAnswers])


const downloadExcel = () => {
 const actualAnswersArray = Object.entries(actualAnswers).map(
   ([key, value]) => ({
     Question: `${parseInt(key) + 1}`, 
     'Selected Answer': actualAnswers[key],
     'Correct Answer': QuestionsInfo[key].correctAnswer,
   })
 )

 // Prepare data for the Excel sheet
 const ws = XLSX.utils.json_to_sheet(actualAnswersArray)
 const wb = XLSX.utils.book_new()
 XLSX.utils.book_append_sheet(wb, ws, 'Answers')

 // Download the file
 XLSX.writeFile(wb, 'User_Answers.xlsx')
}
  const totalMarks = calculateMarks(actualAnswers, highestMarks)





  return (
    <div className="flex items-start justify-start h-fit bg-customBiege p-4 space-x-8">
      {/* Stats Section */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col bg-white shadow-md rounded-lg p-8 w-80"
      >
        <div className="space-y-4  mb-3">
          <div className="bg-customBiege rounded-lg p-4 text-center text-customNavy">
            <p className="text-2xl font-bold">{quizAttempts}</p>
            <p className="text-customNavy">No of Questions Attempted</p>
          </div>
       
          <div className="bg-customBiege rounded-lg p-4 text-center text-customNavy">
            <p className="text-2xl font-bold">
              {totalMarks} / {highestMarks * 100}
            </p>
            <p className="text-customNavy">Highest Marks</p>
          </div>

        </div>

        <div className="bg-customBiege rounded-lg p-1 text-center text-customNavy w-[16rem] mb-3">
          <p className="text-2xl font-bold text-wrap text-center">
            {candidateName || 'User'}
          </p>
          <p className="text-customNavy">Candidate Name</p>
        </div>

        <div className="bg-customBiege rounded-lg p-4 text-center text-customNavy w-[16rem] mb-3">
          <p className="text-2xl font-bold">{averageTime}</p>
          <p className="text-customNavy">Average Time</p>
        </div>
        <div className="bg-customBiege rounded-lg p-4 text-center text-customNavy w-[16rem]">
          <p className="text-2xl font-bold">{quizName}</p>
          <p className="text-customNavy">Quiz Name</p>
        </div>
      </motion.div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-white shadow-md rounded-lg p-8"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2A3663" />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-right mt-4">
          <button
            onClick={downloadExcel}
            className="bg-customNavy hover:bg-customSage hover:text-customNavy text-white font-bold py-2 px-4 rounded"
          >
            Export Data
          </button>
        </div>

        <AnswersShowcase />
      </motion.div>
    </div>
  )
}

export default ReportsPage
