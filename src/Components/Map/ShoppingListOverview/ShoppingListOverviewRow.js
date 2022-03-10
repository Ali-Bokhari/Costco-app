import {Col, Row} from "react-bootstrap";
import RoundedCheckbox from "./RoundedCheckbox";
import "./ShoppingListOverviewRow.css"

const ShoppingListOverviewRow =()=>{
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
                        <strong>Fuji Apples</strong>
                        <p>Aisle 8</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShoppingListOverviewRow;

