import {Card} from "react-bootstrap/esm/index";
import "./SearchResultItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import Nav from "react-bootstrap/Nav";
import { faCirclePlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";


const SearchResultItem = (props) => {

    const [isChosen, setIsChosen] = useState(false)

    const addItem = () =>{
        console.log('item clicked')
        let prevIsChosen = isChosen; //Previous State
        setIsChosen(!isChosen)
        props.onClickItem(props.item, !prevIsChosen)
    }

    return (
        <div className="searchResultItem">
            <Card border="light">
                <Card.Body>
                    <div className="imageContainer">
                        <img src={props.item.image} alt="Image Missing"/>
                    </div>
                    <p>{props.item.name}</p>
                    {!isChosen
                        ? <FontAwesomeIcon onClick={addItem} className="actionIcon add" icon={faCirclePlus} />
                        : <FontAwesomeIcon onClick={addItem} className="actionIcon tick" icon={faCircleCheck} />
                    }
                </Card.Body>
            </Card>
        </div>
    )

}

export default SearchResultItem