import './App.css';
import {AddItemToList} from './components/AddItemToList';
import {ToDoListItem} from './components/ToDoListItem';



function App() {
  return (
    <div className="App">
      <h1 className="Title">Todo List Application</h1>
      <AddItemToList/>
      <ToDoListItem/>
    </div>
  );
}

export default App;
