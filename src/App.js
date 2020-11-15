import './App.css';
import {AddItemForm} from './components/AddItemForm';
import {ToDoListItem} from './components/ToDoListItem';



function App() {
  return (
    <div className="App">
      <h1 className="Title">Todo List Application</h1>
      <AddItemForm/>
      <ToDoListItem/>
      <ToDoListItem/>
      <ToDoListItem/>
      <ToDoListItem/>
    </div>
  );
}

export default App;
