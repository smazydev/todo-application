import React from 'react'
import {ToDoListItem} from '../components/ToDoListItem';



export const ToDoList = ({todos}) => {
    
    return (
        <div className="ListContainer">
            <ul>
                {todos.map(todo => (<ToDoListItem text={todo.text} key={todo.id}/>))}
            </ul>
        </div>
    )
}
