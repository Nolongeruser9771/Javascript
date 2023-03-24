import { useState } from "react";

const colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
const initList =() => {
    const init = [];
    colors.map(c => {
        const singleBox = {
            id: Math.floor(Math.random()*10000),
            value: c
        }
        init.push(singleBox);
    })
    return init;
};

function RenderBox() {
    const [boxes, setBoxes] = useState(initList); //render 5 boxes

    //helper function
    function addBox() {
        colors.map(color => {
            const singBox = {
                id: Math.floor(Math.random()*10000),
                value: color
            }
            setBoxes(prevList => [...prevList,singBox]);
        })
    }

    function disappearBox(id) {
        const newColorBoxes = boxes.filter(box => box.id!==id);
        setBoxes(newColorBoxes); 
    }
    
    let point = boxes.length;

    return (
        <div class="wrap">
            <h1>JS DOM</h1>
            <button id="btn" onClick={()=>addBox()}>More boxes</button>
            <h4 id="score"> Total box: <span>{point}</span></h4>

            <div class="boxes">
                {boxes.map(boxColor => {
                    return (
                    <div onClick={()=>disappearBox(boxColor.id)}  
                        className="box" 
                        style={{backgroundColor:boxColor.value}}>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default RenderBox;