import {React,useState} from 'react';
import './App.css';
import {AddItemForm} from './components/AddItemForm';
import {ToDoList} from './components/ToDoList';




function App() {
  const [item,setItem] = useState('');
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <h1 className="Title">Todo List Application</h1>
      <AddItemForm todos={todos} setTodos={setTodos} item={item} setItem={setItem}/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
