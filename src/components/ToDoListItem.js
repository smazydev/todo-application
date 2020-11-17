import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';
import '../App.css';


export const ToDoListItem = ({Item}) => {
    
    return (
        <div className="ListContainer">
            <ul>
                <li>
                    {Item}
                </li>
                <CheckCrossBtn/>
            </ul>
        </div>
    )
}
