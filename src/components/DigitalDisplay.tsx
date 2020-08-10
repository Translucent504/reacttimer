import React from 'react'
import '../styles/DigitalDisplay.css'

type Props = {
    secondsToDisplay: number;
    counting: boolean;
    handleChangeCountdown: (seconds: number) => void;
}

// This component takes in seconds and renders text
// that represents those seconds ass HH:MM::SS

const DigitalDisplay: React.FC<Props> = ({ secondsToDisplay, handleChangeCountdown }) => {
    secondsToDisplay = Math.abs(secondsToDisplay)
    const displayOptions = {
        minimumIntegerDigits: 2
    }
    const hours = (Math.floor(secondsToDisplay / 3600)).toLocaleString(
        undefined,
        displayOptions
    )
    const minutes = (Math.floor((secondsToDisplay % 3600) / 60)).toLocaleString(
        undefined,
        displayOptions
    )
    const seconds = ((secondsToDisplay % 3600) % 60).toLocaleString(
        undefined,
        displayOptions
    )
    return (
        <div data-testid='digitalDisplay' className='digital-display-container'>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}
export default DigitalDisplay
