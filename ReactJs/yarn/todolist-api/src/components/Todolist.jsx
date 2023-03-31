import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
const API_URL = "http://localhost:8080/api/todos";

function Todolist() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    //get todolist
    useEffect(() => {
        const getAllTodoList = async () => {
            try {
                let todoList = await (await fetch(API_URL)).json();
                console.log("loading todoList:", todoList);
                setTodos(todoList);
            } catch (error) {
                console.error(error);
            }
        }
        getAllTodoList();
      }, []);

    //onDelete todo
    const onDeleteBtn = async(id) => {
        try {
            let response = await fetch(API_URL+"/"+id, {method: "DELETE"});
            if(response.status===204) {
                let responseTodoList = todos.filter(todo => todo.id!==id);
                setTodos(responseTodoList);
            }else{
                alert("error when deleting task")
            }
        } catch (error) {
            console.log(error)
        }
      }

    //onAddBtn
    const onAddBtn = async () => {
        if (title.trim() === "") {
            alert("Title should not be empty!");
            return;
        }
        const newTodo ={
            title: title
        }
    
        // Goi Post API de tao todo moi
        try {
            let postResult = await fetch(API_URL, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                method: "POST",
                body: JSON.stringify(newTodo)
            });
            if (postResult.status === 201) {
                let createdTodo = await postResult.json();
                console.log(createdTodo);
                let updatedTodos = [...todos, createdTodo];
                setTodos(updatedTodos);
                setTitle("");
            } else {
                console.error(postResult);
                alert('Error when creating new todo item');
            }
        } catch (error) {
            console.error(error);
        }
      };
    
    //updatedTodo
    const updateTodo = async(id, updateTodo) => {
        try {
            let putResult = await fetch(API_URL+"/"+id, {
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                },
                method: "PUT",
                body: JSON.stringify(updateTodo),
            });
    
            if(putResult.status===200) {
                const updatedTodo = todos.map(todo => {
                    if(todo.id===id) {
                        return {...todo, title: updateTodo.title, status: updateTodo.status};
                    } else{
                        return todo
                    }
                })
                setTodos(updatedTodo);
            }
        } catch (error) {
            console.log(error)
        }   
    }

    //Edit title
    const onEditBtn = (id) => {
        const newTitle = prompt("Enter your edit...");
        if(newTitle!==null && newTitle!==undefined && newTitle!=="") {
            const todo = todos.find(todo => todo.id===id);
            const updatedTodo ={...todo, title: newTitle};
            updateTodo(id, updatedTodo)
        }
    }

    //Change status
    const onChangeStatus = (id) => {
            const todo = todos.find(todo => todo.id===id);
            let updatedTodo = {...todo, status:!todo.status} 
            updateTodo(id, updatedTodo)
    }
    
    return (
        <>
            <h3>TodoList App</h3>
            <div id="content-input">
                <input className='input-task'
                    placeholder="Enter todo title ..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                ></input>

                <button id="addBtn" onClick={onAddBtn}>Add</button>
            </div>

            <div className='todo-list'>
                <ul>
                    {todos.length > 0 &&
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} 
                            onDeleteBtn={onDeleteBtn}
                            onEditBtn={onEditBtn}
                            onChangeStatus={onChangeStatus}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todolist;