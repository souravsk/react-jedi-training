import ItemList from "./ItemList"
const Content = ({items, handleCheck, handleDelete}) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} 
                />
            ) : (
                <p style={{marginTop:'2rem'}}>Your List is empty</p>
            )}    
        </main>
    )
}

export default Content

//we have have move the list item to this new compontes buz the componte is getting big
//this props is getting drill step down to that mean this items, handlCheack and handleDelets
//is getting the data from the content componets not the main App.js componets.