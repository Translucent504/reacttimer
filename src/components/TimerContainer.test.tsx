import React from 'react'
import { render } from '@testing-library/react'
import TimerContainer from './TimerContainer'

describe('<TimerContainer />', () => {
    
    test('should render time inputs', () => {
        const { getByTestId } = render(<TimerContainer />)
        const timeInputs = getByTestId('timeInputs')
        expect(timeInputs).toBeInTheDocument()
    })
    

    test('should render digital display', () => {
        const { getByTestId } = render(<TimerContainer />)
        const timeElement = getByTestId('digitalDisplay')
        expect(timeElement).toBeInTheDocument()
    })

    test('should render Play/Pause, Replay and Reset buttons', () => {
        const { getByTestId } = render(<TimerContainer />)
        const playPauseButton = getByTestId('playPauseButton')
        const replayButton = getByTestId('replayButton')
        const resetButton = getByTestId('resetButton')
        expect(playPauseButton).toBeInTheDocument()
        expect(resetButton).toBeInTheDocument()
        expect(replayButton).toBeInTheDocument()
    })

    test('should render progress bar', () => {
        const { getByTestId } = render(<TimerContainer />)
        const loadingElement = getByTestId('progressBarContainer')
        expect(loadingElement).toBeInTheDocument()
    })

})
