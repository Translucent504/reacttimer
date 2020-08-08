import React, { useState } from 'react'


const ToggleButton:React.FC = () => {
    const [currentState, setCurrentState] = useState('play')
    return (
        <>
            <button className='play-pause'><i className="fas fa-play"/></button>
        </>
    )
}

export default ToggleButton
