import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, restartGame } from '../../actions/actions';
import Button from '../button';
import './start-game-screen.css'

class StartGameScreen extends Component {

    state = {
        firstGame: {
            text: 'Вам необходимо открыть все парные карточки  за минимальное количество попыток',
            buttonName: 'Начать игру'
        },
        nextGame: {
            text: 'Отлично! Вы открыли все карты c',
            buttonName: 'Попробовать еще раз'
        }
    }

    render() {
        const { firstGame, nextGame } = this.state
        const { onStartGame, onRestartGame, isGameStarted, round } = this.props

        const buttonName = !isGameStarted ? firstGame.buttonName : nextGame.buttonName
        const buttonEvent = !isGameStarted ? onStartGame : onRestartGame
        const text = !isGameStarted ? firstGame.text : nextGame.text

        let result = ''
        if (round <= 8) {
            result = 'Indigo'
        } else if (round > 8 && round < 20) {
            result = 'Blue'
        } else { result = 'Green' }

        return (
            <div className='start-screen'>
                <div className='start-screen-text'>
                    <h3>{text}</h3>
                    <h1 style={{ color: result }} >{!isGameStarted ? null : `${round}-го раза`}</h1>

                    <Button buttonName={buttonName} buttonEvent={buttonEvent} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ isGameStarted, round }) => {
    return { isGameStarted, round }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch(startGame()),
        onRestartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGameScreen)