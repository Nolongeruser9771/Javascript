import { useState } from "react";

function Todo({ todo, onDeleteBtnClick, onCheckBtnClick}) {

    const [textColor,setTextColor] = useState("black");

    const isDone =  (isDone) => {
        isDone===true? setTextColor("red") : setTextColor("black");
    }

    return (
        <div className="task" style={{color: textColor}}>
            {todo.name}
            <button onClick={()=>onDeleteBtnClick(todo.id)}>Delete</button>
            <button onClick={()=>onCheckBtnClick(todo.id)} isDone={()=>isDone(todo.isDone)}>Check</button>
        </div>
    )
}

export default Todo;