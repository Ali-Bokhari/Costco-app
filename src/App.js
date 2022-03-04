

import AddNewItemBar from './Components/AddNewItemBar'

import SearchNew from './Pages/search-new'

import List from './Pages/list'

import {BrowserRouter as Router, Routes, Route, Redirect, Switch} from 'react-router-dom';


const App = ()=> {
    return (
        <div>
            <Route path="/list">
                <List/>
            </Route>
            <Route path="/search-new">
                <SearchNew/>
            </Route>
            {/*<img src={back} alt="costco logo" /> */}
        </div>
    );
}

export default App;
