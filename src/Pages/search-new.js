import AddNewItemBar from '../Components/AddNewItem/AddNewItemBar'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import BottomNav from "../Components/BottomNav";
import {useState} from "react";


const SearchNew=(props)=> {
    const changeShoppingListItemsHandler = (listItems) => {
        console.log("ShoppingListItems @ search-new.js:")
        console.log(listItems)
        props.onChangeShoppingListItems(listItems)
    }

    return (
        <div>
            <AddNewItemBar onChangeShoppingListItems = {changeShoppingListItemsHandler}/>
            <BottomNav/>
        </div>
    );
}

export default SearchNew;
