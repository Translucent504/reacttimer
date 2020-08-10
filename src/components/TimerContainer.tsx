import React, { useState, useEffect } from 'react'
import DigitalDisplay from './DigitalDisplay'
import '../styles/TimerContainer.css'
import ToggleButton from './ToggleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const TimerContainer = () => {
    const [countdown, setCountdown] = useState(10)
    const [counting, setCounting] = useState(false)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(10)


    useEffect(() => {
        const interval = setInterval(() => {
            if (counting) {
                setCountdown((prev) => prev - 1)
            }
        }, 1000)
        return () => clearInterval(interval)

    }, [counting])

    useEffect(() => {
        if (countdown === 0) {
            setCounting(false)
        }
    }, [countdown])

    const toggleCounting = (e: any) => {
        e.preventDefault()
        setCounting(!counting)
    }

    const handleChangeCountdown = (seconds: number) => {
        setCountdown(seconds)
    }

    const handleReset = (e: any) => {
        setCountdown(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        // or set it to whatever was set by the user
    }

    const handleReplay = (e:any) => {
        setCountdown(hours * 3600 + minutes * 60 + seconds)
        setCounting(false)
    }
    


    const handleInputChange = (num: string, type: string) => {
        if (!counting) {
            if (type === 'hours') {
                setHours(parseInt(num))
                setCountdown(prev => (
                    prev % 3600 + parseInt(num) * 3600
                ))
            } else if (type === 'minutes') {
                setMinutes(parseInt(num))
                setCountdown(prev => (
                    prev - (prev % 3600 - prev % 60) + parseInt(num) * 60
                ))
            } else if (type === 'seconds') {
                setSeconds(parseInt(num))
                setCountdown(prev => (
                    prev - prev % 60 + parseInt(num)
                ))
            }
        }
    }

    const progressBarStyle = counting
        ? {
            width: `${Math.abs(countdown / (hours * 3600 + minutes * 60 + seconds)) * 100}%`,
            transition: 'width 0.7s'
        }
        : {
            width: '100%',
            transition: 'width 1s'
        }

    return (
        <div className='timerContainer'>
            <div className='flexContainer'>
                <div className='slider-inputs' data-testid='timeInputs'>
                    <input min={0} max={99} value={hours} onChange={(e) => handleInputChange(e.target.value, 'hours')} type="range" />
                    <input min={0} max={59} value={minutes} onChange={(e) => handleInputChange(e.target.value, 'minutes')} type="range" />
                    <input min={0} max={59} value={seconds} onChange={(e) => handleInputChange(e.target.value, 'seconds')} type="range" />
                </div>
                <div>
                    <DigitalDisplay handleChangeCountdown={handleChangeCountdown} counting={counting} secondsToDisplay={countdown} />
                </div>
                <div className='buttonContainer' data-testid='buttonContainer'>
                    <ToggleButton toggleCounting={toggleCounting} state={counting} />
                    <button className='replay-button' data-testid='replayButton' onClick={handleReplay}>
                        <FontAwesomeIcon icon={faRedoAlt} />
                    </button>
                    <button className='reset-button' data-testid= 'resetButton' onClick={handleReset}>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </button>
                </div>
            </div>
            <div className='progressBarContainer' data-testid='progressBarContainer'>
                <div className="progressBar" style={progressBarStyle} />
            </div>
        </div>
    )
}

export default TimerContainer
