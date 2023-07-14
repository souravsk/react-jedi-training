import React from 'react';
import { FaPlus } from 'react-icons/fa';
import {useRef} from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type="text"
        placeholder="Add Items"
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)} //this is where user add something that will be passed to setNewItem func and then pass to newItem varialbe. and from ther it will add to the list. This can possible of onChange eventhandler
      />
      <button
        type="submit"
        aria-label='Add Items'
        onClick={() => inputRef.current.focus()} //this will bring the focus value back to the add item form to add new item
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
