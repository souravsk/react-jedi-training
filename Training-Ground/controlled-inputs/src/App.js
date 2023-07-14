import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  //created new useStare to added value from user
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shoppinglist')));
  
  //this func will help to store the data into local system so that at everly refresh it won't get deleted the change you made
  const [newItem, setNewItem] = useState('')
  
  //create useState for sreaching items
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem('Shoppinglist',JSON.stringify(newItem));
  }

  //this func will add the item to the list. it 
  const addItem = (item) => {
    const id = item.length ? items[items.length - 1].id +1 : 1; //added id
    const myNewItem = {id, checked: false, item}; //new item with id , item and checked in object form
    const listItem = [...items, myNewItem]; //adding next element to avalable items
    setAndSaveItems(listItem); //storing in local
  }

  const handleCheck = (id) => {
    const listItem = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItem);
  }

  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setAndSaveItems(listItem);
  }

  //it handle submit made by the user
  const handleSubmit = (e) => {
    e.preventDefault(); //it shop browser to refresh the page whenever you add any item
    if (!newItem) return; //check if the item is not just empty
    console.log(newItem);
    //addItem
    addItem(newItem);
    setNewItem(''); //this will make the imput fild empty again so the new item can be added
  }


  return (
    <div className="App">
      <Header title="Star War Watch List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;

// the filter method will filter the list what you have sreaching for