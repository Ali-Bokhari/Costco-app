import MapArea from '../Components/Map/MapArea';
import BottomNav from "../Components/BottomNav";
import Header from "../Components/Header";
import {Card} from "react-bootstrap/esm/index";
import "./Map.css"
import {Button, Col, Row} from "react-bootstrap";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RoundedCheckbox from "../Components/Map/ShoppingListOverview/RoundedCheckbox";
import ShoppingListOverviewRow from "../Components/Map/ShoppingListOverview/ShoppingListOverviewRow";
import ShoppingListOverview from "../Components/Map/ShoppingListOverview/ShoppingListOverview";
import {useEffect, useState} from "react";

function Map(props) {
    const [slist, setSlist] = useState([])

    useEffect(()=>{setSlist(props.slist)},[])

    const isCheckedHandler = (clickedItemName) => {

        console.log(clickedItemName+ " clicked at Map Level")
        let newSlist = JSON.parse(JSON.stringify(slist))
        for (let catitems of newSlist) {
            for (let item of catitems.items) {
                if (item.name === clickedItemName){
                    item.isChecked = !item.isChecked
                    break;
                }
            }
        }
        setSlist(newSlist)
    }

    return (
        <div className="map-page">
            <Header title={"Navigation - Map"}/>
            <div className="store-info-card">
                <Card>
                    <Card.Body>
                        <h6><strong>My Store</strong></h6>
                        <Row className="store-info">
                            <Col xs={9}>
                                <strong>Toronto - 100 Billy Bishop Way</strong>
                                <div>Closes at 10pm</div>
                            </Col>
                            <Col xs={3} id="change-store-btn">Change</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>

            <div className="overview-card float-card">
                <Card>
                    <Card.Body>
                        <div className="overview-info">
                            <div>
                                <strong>Get it done</strong>
                                <div id="todo-count">6 items to complete</div>
                            </div>
                            <div id="navigation-btn">
                                <Button variant="primary">
                                    <FontAwesomeIcon className="nav-icon" icon={faLocationArrow}/>
                                    Start Navigation
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <MapArea slist={slist}/>

            <div className="shopping-list-card float-card">
                <Card>
                    <div className="file-handle-material">
                    </div>
                    <Card.Body>
                        <div className="">
                            <strong>My Shopping List</strong>
                            <div id="">Completed: 1/7</div>
                        </div>
                        <div className="shopping-list-rows">
                            <ShoppingListOverview slist={slist} onTapRadioButton={isCheckedHandler}/>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <BottomNav/>
        </div>
    )
}

export default Map;