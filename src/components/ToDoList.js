import React from 'react'
import {ToDoListItem} from '../components/ToDoListItem';



export const ToDoList = ({setTodos,todos}) => {
    
    return (
        <div className="ListContainer">
            <ul>
                {todos.map(todo => (<ToDoListItem setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id}/>))}
            </ul>
        </div>
    )
}
