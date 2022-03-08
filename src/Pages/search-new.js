import AddNewItemBar from '../Components/AddNewItem/AddNewItemBar'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import BottomNav from "../Components/BottomNav";
import {useState} from "react";
import Header from "../Components/Header";


const SearchNew=(props)=> {
    const changeShoppingListItemsHandler = (listItems) => {
        console.log("ShoppingListItems @ search-new.js:")
        console.log(listItems)
        props.onChangeShoppingListItems(listItems)
    }

    return (
        <div>
            <Header title="Add to Shopping List"/>
            <AddNewItemBar onChangeShoppingListItems = {changeShoppingListItemsHandler}/>
            <BottomNav/>
        </div>
    );
}

export default SearchNew;
