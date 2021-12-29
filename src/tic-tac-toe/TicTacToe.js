import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Board from "./Board";

const initialBoard = Array(9).fill({})
    .map(el => ({id: nanoid(), value: null}));


const TicTacToe = () => {

    const [board, setBoard] = useState(initialBoard);           // to change value of a square
    const [countMoves, setCountMoves] = useState(1);   //  odd or even to choose "X" or "O"
    const xOrO = countMoves % 2 ? 'X' : 'O';                   // odd or even === "X" or "O"

    const handlerMove = (id) => {
        const newBoard = board.map(el => el.id === id ?         // id of a square change value on "X" or "O"
            {...el, value: xOrO} : el);
        setBoard(newBoard);
        setCountMoves(countMoves + 1);
    };

    const checkWinner = () => {
        const arr = [                                          // array of indexes of winning combinations
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < arr.length; i++) {
            const [a, b, c] = arr[i];                         // call every winning combination of indexes as [a, b, c]
            if (board[a].value === board[b].value && board[b].value === board[c].value)
                return board[a].value;                        // if indexes are equal -- func returns value of equals
        }
        return countMoves === 10 ? 'Friendship' : null;       // func returns null or "friendship" if 9 moves done
    };

    const winner = checkWinner();

    const startAgain = () => {
        setBoard(initialBoard);
        setCountMoves(1);
    }

    return (
        <div>
            <h2>Tic Tac Toe</h2>
            {winner === null ? <p>Next is: {xOrO}</p> : <p>{winner} has won!</p>}
            {winner !== null && <button onClick={startAgain}> Start a new game </button>}
            <Board board={board} handlerMove={handlerMove}/>
        </div>
    );
};

export default TicTacToe;