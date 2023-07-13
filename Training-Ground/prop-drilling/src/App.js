import React from "react"
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {

  const [items, setItems] = useState([
    {
        id:1,
        checker: true,
        item: "Star war: Episode l - THe Phantom Menace"
    },
    {
        id:2,
        checker: false,
        item: "Star war: Episode ll - Attack of the Clones"
    },
    {
        id:3,
        checker: false,
        item: "Star war: Episode lll - Revenage of the sith"
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
    <div className="App">
      <Header title="Star War Watch List" />
      <Content 
        items={items}
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
//here we have created a prop or properties 'title' which can be pass to it's componets
//So when ever you change the title it will change.

//so we have move the useState method from content componet to the main app so that we can
//acces those data ans pass those data as props to other componets. 