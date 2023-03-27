import React from "react";
import Todo from "./Todo";

function TodoList({ todoList, onDeleteBtnClick, onCheckBtnClick}) {
    return (
        <>
            {
                todoList.map(todo => <Todo todo={todo} 
                    onDeleteBtnClick={onDeleteBtnClick} 
                    onCheckBtnClick={onCheckBtnClick}/>)
            }
        </>
    );
}

export default TodoList;