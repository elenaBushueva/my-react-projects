import React, {useState} from 'react';
import {nanoid} from "nanoid";

const TodoList = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([{id: nanoid(), name: 'Task One', done: false}]);

    const onChangeInput = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, {id: nanoid(), name: task, done: false}]);
        setTask('');
    };

    const onDoneToggle = (id) => {
        const updatedTask = tasks.map(el => el.id === id ? {...el, done: !el.done} : el);
        setTasks(updatedTask);
    };

    const onDelete = (id) => {
        const updatedTask = tasks.filter(el => el.id !== id);
        setTasks(updatedTask);
    };



    return (
        <div>
        <h2>To Do List</h2>

        <input type="text" value={task} onChange={onChangeInput}/>

        <input type="text" placeholder='Price'/>
        <button onClick={addTask}>Add task</button>

        <ul>
        {tasks.filter(el => !el.done).map(el => <li key={el.id} className={el.done? 'done' : ''}>
            <button>Up</button>
            <button >Down</button>
            {el.name}
            <button onClick={() => onDoneToggle(el.id)} >{ el.done? 'undo' : 'done' }</button>
            <button>Edit</button>
            <button onClick={()=>onDelete(el.id)}>Delete</button>
        </li>)}
        </ul>

        <hr/>
        <ul>
        {tasks.filter(el => el.done).map(el => <li key={el.id} className={el.done? 'done' : ''}>
            {el.name}
            <button onClick={() => onDoneToggle(el.id)} >{ el.done? 'undo' : 'done' }</button>
        </li>)}
        </ul>

        <hr/>
        Total Task Count: 8 <br/>
        Total task price: $89 <br/>
        Total task completed: 2 <br/>
        Total task uncompleted: 5 <br/>


    </div>);
};

export default TodoList;