import AddNewItemBar from './Components/AddNewItem/AddNewItemBar'

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
