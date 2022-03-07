import {Card} from "react-bootstrap/esm/index";
import "./SearchResultItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import Nav from "react-bootstrap/Nav";



import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


const SearchResultItem = (props) => {
    const addItem = () =>{
        console.log('item clicked')
    }

    return (
        <div className="searchResultItem">
            <Card border="light">
                <Card.Body>
                    <div className="imageContainer">
                        <img src={props.image} alt="Image Missing"/>
                    </div>
                    <p>{props.name}</p>
                    <FontAwesomeIcon onClick={addItem} className="add-icon" icon={faCirclePlus} />
                </Card.Body>
            </Card>
        </div>
    )

}

export default SearchResultItem