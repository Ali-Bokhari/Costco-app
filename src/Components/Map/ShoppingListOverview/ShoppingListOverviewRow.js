import {Col, Row} from "react-bootstrap";
import RoundedCheckbox from "./RoundedCheckbox";
import "./ShoppingListOverviewRow.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCirclePlus} from "@fortawesome/free-solid-svg-icons";

const ShoppingListOverviewRow =(props)=>{
    return(
        <div className="shopping-list-overview">
            <Row className="item-container">
                <Col xs={2}>
                    <div className="custom-checkbox">
                        <RoundedCheckbox />
                    </div>
                </Col>
                <Col>
                    <div className="item-info">
                        <strong>{props.name}</strong>
                        {props.showAisle
                            ? <p>Aisle {props.aisle}</p>
                            : <p style={{display: "none"}}>Aisle {props.aisle}</p>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShoppingListOverviewRow;

