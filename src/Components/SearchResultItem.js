import {Card} from "react-bootstrap";
import "./SearchResultItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import Nav from "react-bootstrap/Nav";

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


const SearchResultItem = () => {
    return (
        <div className="searchResultItem">
            <Card border="light">
                <Card.Body>
                    <img src={require("../images/Heinz-Tomato-Paste.png")} alt="Image Missing"/>
                    <p>Heinz Tomato Paste - 9oz</p>
                    <FontAwesomeIcon className="add-icon" icon={faCirclePlus} />
                </Card.Body>
            </Card>
        </div>
    )

}

export default SearchResultItem