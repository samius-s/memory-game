import React from 'react';
import { connect } from 'react-redux'
import { restartGame } from '../../actions/actions';
import Button from '../button';
import './game-info-panel.css'

const GameInfoPanel = ({ round, score, onRestartGame, isGameStarted }) => {

    if (!isGameStarted || score === 8) {
        return null
    }

    return (
        <div className='game-info-panel'>
            <div className='round'>
                Попытка: {round}
            </div>
            {/* <div className='score'>
                Очки: {score}
            </div> */}

            <Button buttonName={'Перезапуск'} buttonEvent={onRestartGame} />
        </div>
    )
}

const mapStateToProps = ({ round, score, isGameStarted }) => {
    return { round, score, isGameStarted }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRestartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoPanel)