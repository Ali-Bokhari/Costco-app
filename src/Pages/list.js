import BottomNav from "../Components/BottomNav";
import ShoppingList from '../Components/ShoppingList/ShoppingList';
import Header from "../Components/Header";


const List = (props) => {

    return(
        <div>
            <Header title="Shopping List"/>
            <ShoppingList slist={props.slist}/>
            <BottomNav/>
        </div>
    )
}

export default List