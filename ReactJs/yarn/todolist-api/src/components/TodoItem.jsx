function TodoItem({ todo, onDeleteBtn, onEditBtn, onChangeStatus}) {
    return (
        <div className="task-container">
            <li>
                <input type="checkbox" checked={todo.status} onChange={()=>onChangeStatus(todo.id)}></input>
                <span className={todo.status?"active":""}>{todo.title}</span>
            </li>
            <div className="task-btn-container">
                <button className="modifiedBtn" onClick={()=>onEditBtn(todo.id)}>Edit</button>
                <button className="modifiedBtn" onClick={()=>onDeleteBtn(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;