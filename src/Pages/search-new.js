import AddNewItemBar from '../Components/AddNewItemBar'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import BottomNav from "../Components/BottomNav";


const SearchNew=()=> {
    return (
        <div>
            <AddNewItemBar/>
            <BottomNav/>
        </div>
    );
}

export default SearchNew;
