import {useState} from "react";
import {Form} from "react-bootstrap/esm/index";
import "./AddNewItemBar.css"
import SearchResultItem from "./SearchResultItem";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "../../index.css"

const items_data = [
    {
        id: '633651',
        name: "Apple ",
        aisle: 1,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        id: '633652',
        name: "Banana",
        aisle: 1,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        id: '633653',
        name: "Apple Pie",
        aisle: 10,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        id: '633654',
        name: "Apparatus",
        aisle: 4,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        id: '633655',
        name: "Tortillas",
        aisle: 6,
        image: "/images/Heinz-Tomato-Paste.png",
    }
]

const AddNewItemBar = (props) => {
    let listItems = [] //storing the updated shopping list items

    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchChangeHandler = (event) => {
        setQuery(event.target.value);
        setSearchResult(
            items_data.filter(
                item => {
                    return item.name.toLowerCase().includes(event.target.value.toLowerCase())
                }
            )
        )
        console.log(searchResult)
    }

    const clickItemHandler = (item, isChosen) => {
        console.log("clicked item:")
        console.log(item, isChosen)
        if(isChosen){// if isChosen is true, means that we need to append this item to the list
            listItems.push(item)
        }else{// if isChosen is false, means that we need to delete this item to the list
            //finding the item id that we want to remove from the shopping list
            let idToRemove = listItems.map(function(t) {
                return t.id
            }).indexOf(item.id);
            listItems.splice(idToRemove, 1);
        }
        props.onChangeShoppingListItems(listItems)
    }

    return (
        <div className="addNewItemBar">
            <Link className="goBackLinkContainer" to="/list">
                <div className="goBackLink">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                    <b>Back</b>
                </div>
            </Link>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control onChange={searchChangeHandler} type="text"
                                  placeholder="Search for grocery items here..."/>
                </Form.Group>
            </Form>
            {searchResult.map(
                item => {
                    return <SearchResultItem item={item} onClickItem={clickItemHandler}/>
                }
            )}
        </div>
    )

}

export default AddNewItemBar