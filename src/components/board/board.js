import React from 'react'
import CardItem from '../card-item/'
import './board.css'

const Board = ({ cardItems, onCardOpen }) => {

    const cardElements = cardItems.map((el) => {
        const { id, ...cardProps } = el

        return (
            <div key={id} className='card-item'>
                <CardItem
                    {...cardProps}
                    onCardOpen={() => onCardOpen(id)}
                />
            </div>)
    })

    return (
        <div className='board'>
            {cardElements}
        </div>
    )
}

export default Board