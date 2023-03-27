import { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]) //array lưu to-do list
  const [textInput, setTextInput] = useState("") //lưu giá trị input

  //set textInput = value of input
  const textInputChange = (e) => {
    setTextInput(e.target.value);
  }
  //create AUTO_ID
  const autoId = () => {
    return Math.floor(Math.random()*10000);
  }
  //set to-do list (oldList + newTodo)
  const onAddBtnClick = () => {
    if(textInput!=="") {
      setTodoList([{id:autoId(), name: textInput, isDone: false},...todoList]);
      setTextInput("");
    }
  }

  //filter todoList on Delete button Click
  const onDeleteBtnClick = (id) => {
    setTodoList(todoList => todoList.filter(todo => todo.id!==id));
  }

  //check to-do if getting Done (change isDone = true)
  const onCheckBtnClick = useCallback((id) => {
      setTodoList((oldList) => 
        oldList.map(todo => 
          todo.id===id?{...todo, isDone: true}: todo)
      );
  },[])


  return (
    <div className='App'>
      <h3>To do List</h3>

      <div id="content-input">
        <input 
          placeholder="Enter your tasks..."
          value={textInput}
          onChange={textInputChange}
        >
        </input>

        <button 
          onClick={onAddBtnClick}
        >Add</button>
      </div>

      <TodoList todoList={todoList} onDeleteBtnClick={onDeleteBtnClick} onCheckBtnClick={onCheckBtnClick}/>
    </div>
  );
}

export default App;
