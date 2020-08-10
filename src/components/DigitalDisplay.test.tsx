import React from 'react'
import { render } from '@testing-library/react'
import DigitalDisplay from './DigitalDisplay'

describe('<DigitalDisplay />', () => {
    let mockHandler = jest.fn()
    

    test('should display 0 seconds correctly', () => {
        const { getByText } = render(<DigitalDisplay handleChangeCountdown={mockHandler} counting={false} secondsToDisplay={0} />)
        const timeElement = getByText('00:00:00')
        expect(timeElement).toBeInTheDocument()
    })

    test('should display 52 seconds correctly', () => {
        const { getByText } = render(<DigitalDisplay handleChangeCountdown={mockHandler} counting={false} secondsToDisplay={52} />)
        const timeElement = getByText('00:00:52')
        expect(timeElement).toBeInTheDocument()
    })

    test('should display 68 seconds correctly', () => {
        const { getByText } = render(<DigitalDisplay handleChangeCountdown={mockHandler} counting={false} secondsToDisplay={68} />)
        const timeElement = getByText('00:01:08')
        expect(timeElement).toBeInTheDocument()
    })

    test('should display 62000 seconds correctly', () => {
        const { getByText } = render(<DigitalDisplay handleChangeCountdown={mockHandler} counting={false} secondsToDisplay={62000} />)
        const timeElement = getByText('17:13:20')
        expect(timeElement).toBeInTheDocument()
    })

    test('should handle negative values and display -62000 seconds correctly ', () => {
        const { getByText } = render(<DigitalDisplay handleChangeCountdown={mockHandler} counting={false} secondsToDisplay={-62000} />)
        const timeElement = getByText('17:13:20')
        expect(timeElement).toBeInTheDocument()
    })

})
