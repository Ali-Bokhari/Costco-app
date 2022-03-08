import AddNewItemBar from './Components/AddNewItem/AddNewItemBar'

import SearchNew from './Pages/search-new'
import List from './Pages/list'
import Map from './Pages/Map'

import {BrowserRouter as Router, Routes, Route, Redirect, Switch} from 'react-router-dom';
import {useEffect, useState} from "react";



const App = ()=> {
    const [slist, setslist] = useState([{
        category: "Chocolate",
        items: {
            "Chocolate-general": false,
            "Sam's chocolate": false,
            "Kitkat": false
        },
        aisle: 2
    },
    {
        category: "Beverages",
        items: {
            "Moosehead Beer": false,
            "Sprite Zero": false,
            "Mountain Dew": false
        },
        aisle: 6
    },
    {
        category:"Meat and Seafood",
        items: {
            "Beef - Generic": false,
            "Foster Farm's Chicken": false,
            "Chicken - Generic": false
        },
        aisle: 20
    }]);


    const [ShoppingListItems, setShoppingListItems] = useState([])

    const changeShoppingListItemsHandler = (listItems) => {
        setShoppingListItems(listItems)
    }

    useEffect(() => {
            console.log("ShoppingListItems @ App.js:");
            console.log(ShoppingListItems)
        },
        [ShoppingListItems]) //print out the shopping list items

    return (
        <div>
            <Route path="/list">
                <List slist={slist}/>
            </Route>
            <Route path="/search-new">
                <SearchNew onChangeShoppingListItems = {changeShoppingListItemsHandler} />
            </Route>
            <Route path="/map">
                <Map slist={slist}/>
            </Route>
            {/*<img src={back} alt="costco logo" /> */}
        </div>
    );
}
export default App;
