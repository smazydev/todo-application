import React from 'react'
import {CheckCrossBtn} from '../components/CheckCrossBtn';

export const ToDoListItem = ({text}) => {
    return (
            <li>
                {text}
                <CheckCrossBtn/>       
            </li>
    )
}
