import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa"

const Content = () => {
    const [items, setItems] = useState([
        {
            id:1,
            checker: true,
            item: "One Punch man CD"
        },
        {
            id:2,
            checker: false,
            item: "Naruto CD"
        },
        {
            id:3,
            checker: false,
            item: "Black Clover CD"
        }
    ]);

    const handleCheck = (id) => {
        const listItem = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item);
        setItems(listItem);
        localStorage.setItem('Shoppinglist',JSON.stringify(listItem));
    }

    const handleDelete = (id) => {
        const listItem = items.filter((item) => item.id !== id);
        setItems(listItem);
        localStorage.setItem('Shoppinglist',JSON.stringify(listItem));
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? {textDecoration:'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt 
                                onClick={() => handleDelete(item.id)}
                                role="button" 
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop:'2rem'}}>Your List is empty</p>
            )}    
        </main>
    )
}

export default Content