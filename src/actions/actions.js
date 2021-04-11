const cardsLoaded = (newCards) => {
    return {
        type: 'CARDS_LOADED',
        payload: newCards
    }
}

const cardOpened = (cardId) => {
    return {
        type: 'CARD_OPENED',
        payload: cardId
    }
}

const startGame = () => {
    return {
        type: 'START_GAME'
    }
}

const endGame = () => {
    return {
        type: 'END_GAME'
    }
}

const restartGame = () => {
    return {
        type: 'RESTART_GAME'
    }
}

const guessedPair = () => {
    return {
        type: 'GUESSED_PAIR'
    }
}

const closePair = () => {
    return {
        type: 'CLOSE_PAIR'
    }
}

const backdropOn = () => {
    return {
        type: 'BACKDROP_ON'
    }
}

export {
    cardsLoaded,
    cardOpened,
    startGame,
    guessedPair,
    closePair,
    endGame,
    backdropOn,
    restartGame,
}