import { useState } from "react";

function ItemRender() {
    //Hook - useState
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [displayText, setDisplayText] = useState("Show");
    const [displayStyle, setDisplayStyle] = useState("block");

    //helper function
    function addItem() {
        if(newItem!="") {
            const item = {
                id: Math.floor(Math.random()*1000),
                value: newItem
            }
            setItems(oldLists => [...oldLists, item]);
            setNewItem("");
        }
    };

    function removeItem() {
        if(items.length!=0) {
            const removeItemID = items[items.length-1].id;
            setItems(items => items.filter(i => i.id!==removeItemID));
        }
    }

    function display() {
        if(displayText=="Show") {
            setDisplayText("Hide")
            setDisplayStyle("block");
        } else {
            setDisplayText("Show");
            setDisplayStyle("none");
        }
    }
     
    return (
    <div>
        <button onClick={() => addItem()}>Add</button>
        <button onClick={() => removeItem()}>Remove</button>

        <input
            type = "text"
            placeholder="Enter your task..."
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
        />

        <button onClick={() => display()}>{displayText}</button>
        <ul style={{display:displayStyle}}>
            {items.map(item => {
               return <li key={item.id}>{item.value}</li>
            })}
        </ul>
    </div>
    );
}

export default ItemRender;