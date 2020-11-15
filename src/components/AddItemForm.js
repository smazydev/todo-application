import React from 'react'

export const AddItemForm = () => {
    return (
        <div className="FormContainer">
            <form>
                <input className="AddItemForm" type="text" htmlFor="ToDoListItem" placeholder="What would you like to do today?"></input>
                <button className="AddItemBtn" type="submit">Add Item</button>
            </form>
        </div>
    )
}
