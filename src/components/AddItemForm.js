import React from 'react';


export const AddItemForm = ({setItem,todos,setTodos,item}) => {
    
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,{text: item,completed:false,id:Math.random() * 1000}
        ])
        setItem("");
    };

    console.log(todos)

    return (
        <div className="FormContainer">
            <form >
                <input value={item} className="AddItemForm" onChange={handleChange}  
                type="text"  htmlFor="ToDoListItem" placeholder="What would you like to do today?">
                </input>
                <button className="AddItemBtn" onClick={handleSubmit} value="submit">Add Item</button>
            </form>
        </div>
    )
}
