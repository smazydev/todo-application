import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare,faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const CheckCrossBtn = () => {
    const Check = <FontAwesomeIcon icon={faCheckSquare}/>
    const Cross = <FontAwesomeIcon icon={faWindowClose}/> 
    return (
        <>
            <button className="Check ListBtn">{Check} mark complete</button>
            <button className="Cross ListBtn">{Cross} delete task</button>
        </>
    )
}
