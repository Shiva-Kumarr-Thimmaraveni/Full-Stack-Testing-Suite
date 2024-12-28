import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect,vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

vi.mock('axios'); 

import Login from '../src/Pages/Login';
describe('Login', () => {

  it('renders default UserEmail & Password Input Fields', () => {
    render(
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </GoogleOAuthProvider>
    )
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
     
  })

  it('shows error for invalid login', async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: 'Invalid username or password' } },
    })

    render(
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </GoogleOAuthProvider>
    )

    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'wrong@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'wrongpassword' },
    })
    fireEvent.click(screen.getByText('Log In'))

    await screen.findByText('Invalid username or password')
    expect(axios.post).toHaveBeenCalled() 
  })

  it('redirects on successful login', async () => {
    axios.post.mockResolvedValue({
      data: { message: 'Login successful', token: 'valid-token' },
    })

     render(
       <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
         <MemoryRouter>
           <Login />
         </MemoryRouter>
       </GoogleOAuthProvider>
     )

    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'brightywork@gmail.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    })
    fireEvent.click(screen.getByText('Log In'))

    await screen.findByText('Login successful') 
    expect(axios.post).toHaveBeenCalled() 
  })


})
