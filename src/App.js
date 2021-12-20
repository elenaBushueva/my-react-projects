import React, {useState} from 'react';
import TicTacToe from "./tic-tac-toe/TicTacToe";
import TodoList from "./inputs/TodoList";

const App = () => {

    const [openGame, setOpenGame] = useState('');

    const openApp = (game) => {
    setOpenGame(game);
    }

    return (
        <div>
            <button onClick={() => openApp('ticTacToe')}>Tic Tac Toe</button>
            {openGame === 'ticTacToe' && <TicTacToe/>}

            <button onClick={() => openApp('todoList')} >todoList</button>
            {openGame === 'todoList' && <TodoList />}
        </div>
    );
};

export default App;


