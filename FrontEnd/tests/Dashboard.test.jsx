import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dashboard from './../src/Pages/Dashboard';
import { MemoryRouter } from 'react-router-dom'


describe('Dashboard', () => {
  it('renders the user name on the screen after succesful Authentication google login / signup', () => {

    const mockUser = {
      message: 'success',
      token:
        'some_token',
      user: {
        _id: 'some_id',
        name: 'SHIVA THIMMARAVENI',
        email: 'brightywork@gmail.com',
        image:
          'some_image_link',
        __v: 0,
      },
    }

    render(
      <MemoryRouter>
        <Dashboard user={mockUser} />
      </MemoryRouter>
    )

    expect(screen.getByText('Hello User.')).toBeInTheDocument()
  })


})


