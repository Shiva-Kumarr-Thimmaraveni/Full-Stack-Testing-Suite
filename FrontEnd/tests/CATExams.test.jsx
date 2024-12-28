import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { QuestionsInfo } from '../src/questionData'
import { AppContext } from '../src/Context/AppContext'
import AdaptiveTest from '../src/Components/AdaptiveTest'
import delay from '../utils/delay'


describe('Quiz Component', () => {
  it('renders the first question', () => {
     const mockSetCatPercentage = vi.fn()
     const mockSetCatCorrectAnswers = vi.fn()
    render(
      <MemoryRouter>
        <AppContext.Provider value={{ 
        setCatPercentage: mockSetCatPercentage,
        setCatCorrectAnswers: mockSetCatCorrectAnswers, }}>
          <AdaptiveTest
            QuestionsInfo={[
              {
                question: 'Sample Question?',
                options: ['A', 'B', 'C', 'D'],
                correctAnswer: 'A',
              },
            ]}
            setCatPercentage={mockSetCatPercentage}
            setCatCorrectAnswers={mockSetCatCorrectAnswers}
          />
        </AppContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText(QuestionsInfo[0].question)).toBeInTheDocument()
  })

  it('adjusts difficulty after correct/incorrect answers', async () => {
    const mockSetCatPercentage = vi.fn()
    const mockSetCatCorrectAnswers = vi.fn()
    
    render(
      <MemoryRouter>
        <AppContext.Provider
          value={{
            setCatPercentage: mockSetCatPercentage,
            setCatCorrectAnswers: mockSetCatCorrectAnswers,
          }}
        >
          <AdaptiveTest
            QuestionsInfo={[
              {
                question: 'Sample Question?',
                options: ['A', 'B', 'C', 'D'],
                correctAnswer: 'A',
              },
            ]}
            setCatPercentage={mockSetCatPercentage}
            setCatCorrectAnswers={mockSetCatCorrectAnswers}
          />
        </AppContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('medium')).toBeInTheDocument()
    fireEvent.click(screen.getByText(QuestionsInfo[0].options[0]))
    expect(screen.getByText(/correct/i)).toBeInTheDocument()
    expect(
      screen.getByText('The option you selected is correct!')
    ).toBeInTheDocument()
    await delay(3000)    
    expect(screen.getByText('hard')).toBeInTheDocument()
    fireEvent.click(screen.getByText(QuestionsInfo[12].options[1]))
    screen.getByText('The option you selected is wrong.')
    
    
  })


})
