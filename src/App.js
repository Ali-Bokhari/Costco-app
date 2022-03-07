import AddNewItemBar from './Components/AddNewItem/AddNewItemBar'

import SearchNew from './Pages/search-new'

import List from './Pages/list'

import {BrowserRouter as Router, Routes, Route, Redirect, Switch} from 'react-router-dom';



const App = ()=> {

    let slist = [{
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
        aisle: 7
    }]

    return (
        <div>
            <Route path="/list">
                <List slist={slist}/>
            </Route>
            <Route path="/search-new">
                <SearchNew slist={slist}/>
            </Route>
            {/*<img src={back} alt="costco logo" /> */}
        </div>
    );
}

export default App;
