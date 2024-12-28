import React, { useState, useEffect } from 'react';
import {Eye, EyeClosed} from 'lucide-react'
import bgLogin from '../assets/bgLogin.jpg'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from './../api';
import axios from 'axios';
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [signUpActive, setSignActive] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState(null)

   useEffect(() => {
     if (message) {
       const timer = setTimeout(() => {
         setMessage('') 
       }, 3000)

       
       return () => clearTimeout(timer)
     }
   }, [message])


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const responseGoogle = async (authResult) => {
    try{
      if(authResult['code']){
        const result = await googleAuth(authResult['code'])
        const {email,name,image} = result.data.user
        const token = result.data.token
        const obj = {email, name, image, token}
        localStorage.setItem('user-Info', JSON.stringify(obj))
        navigate('/dashboard')

      }

    }catch(err) {
      console.log('Error While requesting Google Code :', err)
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })

  const handleSignUp = async (e) => {
     e.preventDefault()

   

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/register`, {
        username,
        userEmail,
        password,
      })
      setMessage(response.data.message)
     
        setUsername('')
        setUserEmail('')
        setPassword('')
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      )
    
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
     try {
       const response = await axios.post(
         `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/login`,
         {
           userEmail,
           password,
         }
       )
       setMessage(response.data.message)
       setToken(response.data.token) 
      
       setUsername('')
       setUserEmail('')
       setPassword('')

      setTimeout(() => {
        navigate('/dashboard')
      }, 4000)

     } catch (error) {
       setMessage(
         error.response?.data?.message ||
           'Something went wrong. Please try again.'
       )
     }
  }

  

  

  return (
    <div className="flex items-center justify-between h-screen bg-customBiege font-GoogleI text-customNavy">
      <div className="p-8 max-w-md m-auto w-full h-full">
        {/* Login Nav Bar */}
        <div className="flex flex-row justify-between h-fit mb-36">
          {/* <img src={ReBirthLogo} alt="ReBirthLogo" /> */}
          <h2 className="text-l font-bold align-middle mb-auto mt-auto">
            ReBirth <br />
            Exams
          </h2>
          {signUpActive ? (
            <button
              type="button"
              onClick={() => setSignActive(!signUpActive)}
              className="bg-customBiege border-2 border-customSage text-gray-400  px-6 h-10 text-center align-middle mt-auto mb-auto rounded-3xl w-fit hover:bg-customNavy hover:text-white hover:border-none"
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSignActive(!signUpActive)}
              className="bg-customBiege border-2 border-customSage text-gray-400  px-6 h-10 text-center align-middle mt-auto mb-auto rounded-3xl w-fit hover:bg-customNavy hover:text-white hover:border-none"
            >
              Sign Up
            </button>
          )}
        </div>

        {/* Login Card */}
        <div className="flex flex-row justify-between">
          {signUpActive ? (
            <h2 className="text-l font-bold mb-5">Sign Up for a new account</h2>
          ) : (
            <h2 className="text-l font-bold mb-5">Login to your account</h2>
          )}
          <div className="flex items-end justify-between mb-3 flex-col">
            {signUpActive ? (
              <span className="text-customNavy opacity-50">Sign Up with</span>
            ) : (
              <span className="text-customNavy opacity-50">login with</span>
            )}
            <div className="flex space-x-4 mt-2">
              <button
                onClick={googleLogin}
                className="text-gray-500 hover:text-customNavy"
              >
                <GoogleIcon size={24} />
              </button>
              <button className="text-gray-500 hover:text-customNavy">
                <LinkedInIcon size={24} />
              </button>
              
            </div>
          </div>
        </div>

        <form onSubmit={handleSignUp}>
          {signUpActive && (
            <div className="mb-4">
              <input
                type="name"
                value={username}
                placeholder="Your Name"
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 rounded-3xl px-4 py-2 w-full bg-white border-none "
              />
            </div>
          )}

          <div className="mb-4">
            <input
              data-testid="user-email"
              type="email"
              value={userEmail}
              placeholder="Your Email"
              onChange={(e) => setUserEmail(e.target.value)}
              className="border border-gray-300 rounded-3xl px-4 py-2 w-full bg-white border-none "
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-300 rounded-3xl px-4 py-2 w-full border-none"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </button>
          </div>
          {message && (
            <>
              {message === 'User registered successfully' && (
                <Alert severity="success">{message}</Alert>
              )}
              {message === 'Invalid username or password' && (
                <Alert severity="error">{message}</Alert>
              )}
              {message === 'Login successful' && (
                <Alert severity="success">{message}</Alert>
              )}
              {message === 'Internal server error' && (
                <Alert severity="error">{message}</Alert>
              )}
            </>
          )}

          <div className="text-center flex justify-between w-100 mt-8">
            {signUpActive ? (
              <>
                <a
                  href="#"
                  className="text-customNavy hover:text-customNavy hover:opacity-100 text-sm ml-2 opacity-50"
                >
                  Refer your Friend
                </a>
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="bg-customNavy text-white h-10 w-fit py-2 px-8 rounded-3xl mb-4 hover:bg-customBrown hover:text-white"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="text-customNavy hover:text-customNavy hover:opacity-100 text-sm ml-2 opacity-50"
                >
                  Forgot password?
                </a>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="bg-customNavy text-white h-10 w-fit py-2 px-8 rounded-3xl mb-4 hover:bg-customBrown hover:text-white"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Login Screen Image  */}
      <img src={bgLogin} alt="bgLogin" className="h-full" />
    </div>
  )
};

export default LoginPage;