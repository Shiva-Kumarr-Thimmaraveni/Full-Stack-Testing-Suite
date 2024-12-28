
import './App.css'
import Login from './Pages/Login'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Reports from './Pages/Reports'
import Exams from './Pages/Exams'
import ErrorPage from './Pages/ErrorPage'
import { GoogleOAuthProvider } from '@react-oauth/google'
import CATExams from './Pages/CATExams'

function App() {
  
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <Login />
      </GoogleOAuthProvider>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/CATExams" element={<CATExams />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
