import React, { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const currentPlayer = isXNext ? 'X' : 'O';

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Tic-Tac-Toe</h1>
            <div className="grid grid-cols-3 gap-2 mb-4">
                {board.map((square, index) => (
                    <button
                        key={index}
                        className="w-24 h-24 text-3xl font-bold text-gray-700 bg-white border-2 border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
                        onClick={() => handleClick(index)}
                    >
                        {square}
                    </button>
                ))}
            </div>
            <div className="text-center">
                {winner ? (
                    <h2 className="text-2xl font-semibold text-green-600">Winner: {winner}</h2>
                ) : (
                    <h2 className="text-xl">Next Player: {currentPlayer}</h2>
                )}
                <button
                    onClick={resetGame}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
}

export default TicTacToe;
