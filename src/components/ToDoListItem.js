import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';

export const ToDoListItem = ({text,id,todo,todos,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el)=> el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
            <li className={`${todo.completed ? "completed" : ""}`}>
                {text}
                <CheckCrossBtn todo={todo} completeHandler={completeHandler} deleteHandler={deleteHandler}/>       
            </li>
    )
}
