import React from 'react';


export const AddItemForm = ({setItem}) => {
    
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit}>
                <input className="AddItemForm" onChange={handleChange}  
                type="text"  htmlFor="ToDoListItem" placeholder="What would you like to do today?">
                </input>
                <button className="AddItemBtn" value="submit">Add Item</button>
            </form>
        </div>
    )
}
