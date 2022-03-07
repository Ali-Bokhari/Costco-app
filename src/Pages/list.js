import BottomNav from "../Components/BottomNav";
import ShoppingList from '../Components/ShoppingList/ShoppingList';


const List = (props) => {

    return(
        <div>
            <ShoppingList slist={props.slist}/>
            <BottomNav/>
        </div>
    )
}

export default List