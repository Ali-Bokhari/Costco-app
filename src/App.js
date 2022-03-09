import SearchNew from './Pages/search-new'
import List from './Pages/list'
import Map from './Pages/Map'

import {Route} from 'react-router-dom';
import {useEffect, useState} from "react";


const App = () => {
    const [slist, setslist] = useState([
        {
            category: "Chocolate",
            items: [
                {name: "Chocolate-general", isChecked: false},
                {name: "Sam's chocolate", isChecked: false},
                {name: "Kitkat", isChecked: false}
            ],
            aisle: 6
        },
        {
            category: "Beverages",
            items: [
                {name: "Moosehead Beer", isChecked: true},
                {name: "Sprite Zero", isChecked: true},
                {name: "Mountain Dew", isChecked: true}
            ],
            aisle: 11
        },
        {
            category: "Meat and Seafood",
            items: [
                {name: "Beef - Generic", isChecked: false},
                {name: "Foster Farm's Chicken", isChecked: false},
                {name: "Chicken - Generic", isChecked: false}
            ],
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
                <SearchNew onChangeShoppingListItems={changeShoppingListItemsHandler}/>
            </Route>
            <Route path="/map">
                <Map slist={slist}/>
            </Route>
            {/*<img src={back} alt="costco logo" /> */}
        </div>
    );
}
export default App;
