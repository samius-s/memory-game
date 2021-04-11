import React from 'react'
import BoardContainer from '../board'
import Header from '../header'
import './app.css'

const App = () => {
    return (
        <div className='container'>
            <Header />
            <BoardContainer />
        </div>
    )
}

export default App