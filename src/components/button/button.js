import React from 'react'
import './button.css'

const Button = ({ buttonName, buttonEvent }) => {
    return (
        <button
            onClick={() => buttonEvent()}
            className='btn btm-outline-danger btn-secondary'
        >
            {buttonName}
        </button>
    )
}

export default Button