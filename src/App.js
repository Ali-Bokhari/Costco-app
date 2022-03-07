import AddNewItemBar from './Components/AddNewItem/AddNewItemBar'

import SearchNew from './Pages/search-new'

import List from './Pages/list'

import {BrowserRouter as Router, Routes, Route, Redirect, Switch} from 'react-router-dom';
import {useEffect, useState} from "react";



const App = ()=> {

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
                <List/>
            </Route>
            <Route path="/search-new">
                <SearchNew onChangeShoppingListItems = {changeShoppingListItemsHandler} />
            </Route>
            {/*<img src={back} alt="costco logo" /> */}
        </div>
    );
}

// import back from './images/CostcoBackground.png';

// import ShoppingList from './ShoppingList';

// function App() {
//   return (
//     <div>
//       {/* <img src={back} alt="costco logo" /> */}
//       <ShoppingList />
//     </div>
//   );
// }

export default App;
