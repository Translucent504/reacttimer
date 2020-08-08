import React, { useState, useEffect } from 'react'
import DigitalDisplay from './DigitalDisplay'
import '../styles/TimerContainer.css'

const TimerContainer = () => {
    const [countdown, setCountdown] = useState(0)
    const [counting, setCounting] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (counting) {
                setCountdown((prev) => prev - 1)
            }
        }, 1000)

        return () => clearInterval(interval)

    }, [counting])

    const toggleCounting = (e: any) => {
        e.preventDefault()

        setCounting(!counting)
    }

    const handleChangeCountdown = (seconds: number) => {
        console.log(seconds)
        setCountdown(seconds)
    }


    const handleReset = (e: any) => {
        e.preventDefault()
        setCountdown(0)
    }

    return (
        <div className='timerContainer'>
            <div>
                <div>
                    <DigitalDisplay handleChangeCountdown={handleChangeCountdown} counting={counting} secondsToDisplay={countdown} />
                </div>
                <div>
                    <button onClick={toggleCounting}>
                        {counting
                            ? 'Pause'
                            : 'Play'
                        }
                    </button>
                    <button onClick={handleReset}>
                        Reset
                </button>
                </div>
                <div>
                    Loading
            </div>
            </div>
        </div>
    )
}

export default TimerContainer
