const updateCardItems = () => { // формирование массива карт
    const cardImages = [
        '/images/img_01.jpg',
        '/images/img_02.jpg',
        '/images/img_03.jpg',
        '/images/img_04.jpg',
        '/images/img_05.jpg',
        '/images/img_06.jpg',
        '/images/img_07.jpg',
        '/images/img_08.jpg',
        '/images/img_01.jpg',
        '/images/img_02.jpg',
        '/images/img_03.jpg',
        '/images/img_04.jpg',
        '/images/img_05.jpg',
        '/images/img_06.jpg',
        '/images/img_07.jpg',
        '/images/img_08.jpg'
    ]

    cardImages.sort(() => Math.random() - 0.5)
    const cardItems = []
    for (let i = 0; i < 16; i++) {
        cardItems[i] = {
            id: i + 1,
            img: cardImages[i],
            isOpen: false
        }
    }

    return cardItems
}

const initialState = {
    isGameStarted: false,
    isGameEnded: false,
    backdrop: false,
    round: 1,
    score: 0,
    chosenCards: [],
    cardItems: []
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {

        case 'CARDS_LOADED':
            return {
                ...state,
                cardItems: action.payload
            }

        case 'CARD_OPENED':
            const cardId = action.payload
            const card = state.cardItems.find((card) => card.id === cardId)
            const newCard = {
                id: card.id,
                img: card.img,
                isOpen: true
            }
            const idx = state.cardItems.findIndex((card) => card.id === cardId)

            return {
                ...state,
                chosenCards: [
                    ...state.chosenCards,
                    newCard
                ],
                cardItems: [
                    ...state.cardItems.slice(0, idx),
                    newCard,
                    ...state.cardItems.slice(idx + 1)
                ]
            }

        case 'START_GAME':
            return {
                ...state,
                isGameStarted: true,
                chosenCards: [],
                cardItems: updateCardItems()
            }

        case 'GUESSED_PAIR':
            return {
                ...state,
                chosenCards: [],
                score: ++state.score
            }

        case 'CLOSE_PAIR':
            let minIndex = state.chosenCards[0].id < state.chosenCards[1].id ? state.chosenCards[0].id : state.chosenCards[1].id
            let maxIndex = state.chosenCards[0].id > state.chosenCards[1].id ? state.chosenCards[0].id : state.chosenCards[1].id

            const idxFirstCardToClose = state.cardItems.findIndex((card) => card.id === minIndex)
            const idxSecondCardToClose = state.cardItems.findIndex((card) => card.id === maxIndex)

            const firstCardToClose = {
                id: minIndex,
                img: state.cardItems[minIndex - 1].img,
                isOpen: false
            }

            const secondCardToClose = {
                id: maxIndex,
                img: state.cardItems[maxIndex - 1].img,
                isOpen: false
            }

            return {
                ...state,
                backdrop: false,
                chosenCards: [],
                round: ++state.round,
                cardItems: [
                    ...state.cardItems.slice(0, idxFirstCardToClose),
                    firstCardToClose,
                    ...state.cardItems.slice(idxFirstCardToClose + 1, idxSecondCardToClose),
                    secondCardToClose,
                    ...state.cardItems.slice(idxSecondCardToClose + 1)
                ]
            }

        case 'END_GAME':
            return {
                ...state,
                isGameEnded: true,
                isGameStarted: false,
                cardItems: initialState.cardItems
            }

        case 'BACKDROP_ON':
            return {
                ...state,
                backdrop: true
            }

        case 'RESTART_GAME':
            return {
                ...state,
                isGameStarted: true,
                round: 1,
                score: 0,
                chosenCards: [],
                cardItems: updateCardItems()
            }

        default:
            return state
    }
}

export default reducer