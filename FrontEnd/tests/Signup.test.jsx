import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

vi.mock('axios')

import Login from '../src/Pages/Login'
describe('Signup', () => {
  it('renders default Username, UserEmail & Password Input Fields', () => {
    render(
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </GoogleOAuthProvider>
    )
    fireEvent.click(screen.getByText('Sign Up'))
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  

  it('redirects on successful login', async () => {
    axios.post.mockResolvedValue({
      data: { message: 'User registered successfully' },
    })

    render(
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </GoogleOAuthProvider>
    )
     fireEvent.click(screen.getByText('Sign Up'))
     
     fireEvent.change(screen.getByPlaceholderText('Your Name'), {
       target: { value: 'brighty' },
     })
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'sbrighty54@gmail.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    })
    fireEvent.click(screen.getByText('Sign Up'))

    await screen.findByText('User registered successfully')
    expect(axios.post).toHaveBeenCalled()
  })
})
