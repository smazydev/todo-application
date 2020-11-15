import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';
import '../App.css';


export const ToDoListItem = () => {
    return (
        <div class="ListContainer">
            <ul>
                <li>
                    Hello World
                </li>
                <CheckCrossBtn/>
            </ul>
        </div>
    )
}
