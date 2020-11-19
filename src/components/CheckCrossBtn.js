import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare,faWindowClose} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const CheckCrossBtn = ({deleteHandler}) => {
    const Check = <FontAwesomeIcon icon={faCheckSquare}/>
    const Cross = <FontAwesomeIcon icon={faWindowClose}/> 


    return (
        <>
            <button className="Check ListBtn">{Check}</button>
            <button onClick={deleteHandler} className="Cross ListBtn">{Cross}</button>
        </>       
    )
    }
