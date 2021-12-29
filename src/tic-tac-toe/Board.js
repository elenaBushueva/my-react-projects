import React from 'react';
import Square from "./Square";

const style = {
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = (props) => {
    return (
        <div style={style}>
            {props.board.map(el => <Square key={el.id} square={el} handlerMove={props.handlerMove}/>)}
        </div>
    );
};

export default Board;