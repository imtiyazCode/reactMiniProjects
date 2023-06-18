import React from 'react'
import './style.css'

const GameBoard = ({ winner,currentPlayer,winningCells,handleCellClick,resetGame,board }) => {
    return (
        <div className='game-board'>
            {winner ? winner === "draw" ? (
                <p className='winner-title'>It's a draw!</p>
            ) : (
                <p className='winner-title'>Player
                    <span className={winner}> {winner}</span> wins!
                </p>
            ) : <p className={`winner-title`}>Current Player:
                <span className={currentPlayer}> {currentPlayer}</span>
            </p>}
            <div className="board">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className={`cell ${winningCells.includes(index) ?'winning':''} ${cell}`}
                        onClick={() => handleCellClick(index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            {winner && (
                <div className="message">
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}</div>
    )
}

export default GameBoard