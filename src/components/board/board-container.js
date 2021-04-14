import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGame, guessedPair, cardOpened, closePair, backdropOn, cardsLoaded } from '../../actions/actions'
import Board from '../board/board'
import StartGameScreen from '../start-game-screen/'
import Backdrop from '../backdrop'

class BoardContainer extends Component {

    render() {
        const { cardItems, chosenCards, score,
            backdrop, onCardOpen, isGameStarted,
            onGuessPair, onCloseCards, onBackdrop
        } = this.props

        if (!isGameStarted || score === 8) {
            return <StartGameScreen />
        }

        if (chosenCards.length === 2) {
            if (chosenCards[0].img === chosenCards[1].img) {
                setTimeout(() => onGuessPair(), 10)
                // onGuessPair()
            } else if (!backdrop) {
                setTimeout(() => onBackdrop(), 10)
                // onBackdrop()
            } else {
                setTimeout(() => onCloseCards(), 500)
            }
        }

        return (
            <div>
                <Board cardItems={cardItems} onCardOpen={onCardOpen} />
                {backdrop ? <Backdrop /> : null}
            </div>
        )
    }
}

const mapStateToProps = ({ cardItems, isGameStarted, chosenCards, score, backdrop }) => {
    return { cardItems, isGameStarted, chosenCards, score, backdrop }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCardOpen: (id) => dispatch(cardOpened(id)),
        onStartGame: () => dispatch(startGame()),
        onGuessPair: () => dispatch(guessedPair()),
        onBackdrop: () => dispatch(backdropOn()),
        onCloseCards: () => dispatch(closePair()),
        onCardsLoad: (cards) => dispatch(cardsLoaded(cards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)