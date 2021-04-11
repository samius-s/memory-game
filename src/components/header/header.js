import React from 'react';
import GameInfoPanel from '../game-info-panel';
import './header.css'

const Header = () => {
    return (
        <div className='shop-header row'>
            <div className='logo text-dark'>
                MEMO
            </div>
            <GameInfoPanel />
        </div>
    )
}

export default Header