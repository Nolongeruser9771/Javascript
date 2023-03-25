import { useEffect, useState } from "react";

function Counter() {
    //Use Hook: useState
    const [counter,setCounter] = useState(0);
    const [textColor, setTextColor] = useState("#333333");

    //helper function
    const minus = ()=>{
        return setCounter(counter-1);
    }

    const plus = ()=>{
        return setCounter(counter+1);
    }

    useEffect(()=>{
        if(counter>0) return setTextColor("green");
        else if(counter<0) return setTextColor("red");
        else return setTextColor("#333333");
    },[counter])

    return(
        <div class="main-container">
            <h1 class="title">Đếm số</h1>
            <h1 id="counter" style={{color: textColor}}>{counter}</h1>
            <div class="btn-container">
                <button class="btn counterBtn prevBtn" onClick={minus}>Trừ</button>
                <button class="btn counterBtn nextBtn"onClick={plus}>Cộng</button>
            </div>
        </div>
    );
}

export default Counter;