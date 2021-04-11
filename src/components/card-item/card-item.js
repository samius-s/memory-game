import React from 'react'
import './card-item.css'

const CardItem = ({ img, isOpen, onCardOpen }) => {

    if (isOpen) {
        return (
            <div className='open-card-item'>
                <img src={img} alt='background' className='background' />
            </div>
        )
    }

    return (
        <div className='close-card-item' onClick={onCardOpen}>
            <img
                src='/images/back_ground.png'
                alt='background'
                className='background'
            />
        </div>
    )
}

export default CardItem