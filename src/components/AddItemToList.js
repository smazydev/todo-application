import React from 'react'

export const AddItemToList = () => {
    return (
        <div className="FormContainer">
            <form className="AddItemForm">
                <input className="AddItemToList" type="text" htmlFor="ToDoListItem" placeholder="What would you like to do today?"></input>
                <button className="AddItemBtn" type="submit">Add Item</button>
            </form>
        </div>
    )
}
