import React from 'react'
import { render } from '@testing-library/react'
import TimerContainer from './TimerContainer'

describe('<TimerContainer />', () => {
    
    test('should render digits', () => {
        const { getByText } = render(<TimerContainer />)
        const timeElement = getByText('00:00:00')
        expect(timeElement).toBeInTheDocument()
    })

    test('should render Play and Reset buttons', () => {
        const { getByText } = render(<TimerContainer />)
        const playButton = getByText('Play')
        const resetButton = getByText('Play')
        expect(playButton).toBeInTheDocument()
        expect(resetButton).toBeInTheDocument()
    })

    test('should render progress bar', () => {
        const { getByText } = render(<TimerContainer />)
        const loadingElement = getByText('Loading')
        expect(loadingElement).toBeInTheDocument()
    })

})
