import AddNewItemBar from '../Components/AddNewItem/AddNewItemBar'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import BottomNav from "../Components/BottomNav";
import { propTypes } from 'react-bootstrap/esm/Image';


const SearchNew=(props)=> {
    return (
        <div>
            <AddNewItemBar slist={propTypes.slist}/>
            <BottomNav/>
        </div>
    );
}

export default SearchNew;
