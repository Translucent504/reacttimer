import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import './ToggleButton.css'

type Props = {
    toggleCounting: (e:any) => void;
    state: boolean;
}

const ToggleButton: React.FC<Props> = ({toggleCounting, state}) => {

    return (
        <button data-testid='playPauseButton' className='toggle-button' onClick={toggleCounting}>
            {!state
                ? <FontAwesomeIcon icon={faPlayCircle} />
                : <FontAwesomeIcon icon={faPauseCircle} />
            }
        </button>
    )
}

export default ToggleButton
