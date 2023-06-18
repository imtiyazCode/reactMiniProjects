import React, { useState } from 'react'
import GameBoard from '../GameBoard';
import './style.css'

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [winningCells, setWinningCells] = useState([])

    const handleCellClick = (index) => {
        if (board[index] || winner) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        checkWinner(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    const checkWinner = (board) => {
        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setWinningCells([a, b, c])
                return;
            }
        }

        if (board.every((cell) => cell !== null)) {
            setWinner("draw");
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setCurrentPlayer("X");
        setWinner(null);
        setWinningCells([])
    };
    return (
        <div>
            <h1 className="app-title">Tic-<span>Tac</span>-Toe</h1>
            <GameBoard winner={winner} currentPlayer={currentPlayer}
                winningCells={winningCells} handleCellClick={handleCellClick}
                resetGame={resetGame} board={board} />
        </div>
    )
}

export default TicTacToe