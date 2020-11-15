import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';
import '../App.css';

export const ToDoListItem = () => {
    return (
        <div class="ListContainer">
            <ul>
                <li>
                    Make a React Todolist-application
                </li>
                <CheckCrossBtn/>
            </ul>
        </div>
    )
}
