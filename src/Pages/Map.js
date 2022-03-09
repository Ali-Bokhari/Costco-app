import MapArea from '../Components/Map/MapArea';
import BottomNav from "../Components/BottomNav";
import Header from "../Components/Header";
import {Card} from "react-bootstrap/esm/index";
import "./Map.css"
import {Row, Col, Button} from "react-bootstrap";
import {faCircleCheck, faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Map (props){
    return (
        <div className="map-page">
            <Header title={"Navigation - Map"}/>
            <div className="store-info-card">
                <Card >
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

            <div className="overview-card">
                <Card>
                    <Card.Body>
                        <div className="overview-info">
                            <div>
                                <strong>Get it done</strong>
                                <div id="todo-count">6 items to complete</div>
                            </div>
                            <div id="navigation-btn">
                                <Button variant="primary">
                                    <FontAwesomeIcon className="nav-icon" icon={faLocationArrow} />
                                    Start Navigation
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <MapArea slist={props.slist}/>
            <BottomNav/>
        </div>
    )
}

export default Map;