import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';

export const ToDoListItem = ({text,id,todo,todos,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el)=> el.id !== todo.id));
    }
    
    return (
            <li>
                {text}
                <CheckCrossBtn deleteHandler={deleteHandler}/>       
            </li>
    )
}
