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
        name: "Apple ",
        aisle: 1,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        name: "Banana",
        aisle: 1,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        name: "Apple Pie",
        aisle: 10,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        name: "Apparatus",
        aisle: 4,
        image: "/images/Heinz-Tomato-Paste.png",
    },
    {
        name: "Tortillas",
        aisle: 6,
        image: "/images/Heinz-Tomato-Paste.png",
    }
]

const AddNewItemBar = () => {
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

    return (
        <div className="addNewItemBar">

            <div className="goBackLink">
                <Link to="/list">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                    <b>Back</b>
                </Link>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control onChange={searchChangeHandler} type="text"
                                  placeholder="Search for grocery items here..."/>
                </Form.Group>
            </Form>
            {searchResult.map(
                item => {
                    return <SearchResultItem name={item.name} image={item.image}/>
                }
            )}
        </div>
    )

}

export default AddNewItemBar