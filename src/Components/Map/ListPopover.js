import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import ShoppingListOverviewRow from "./ShoppingListOverview/ShoppingListOverviewRow";

import './ListPopover.css'

function ListPopover(props) {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Body className="my-0">
            <div className="item-group">
                {props.items.map((item, idx) => (
                    <Container key={idx} className="listfont">
                        <ShoppingListOverviewRow showAisle={false} name={item.name} isChecked={item.isChecked}/>
                    </Container>
                ))}
            </div>
          </Popover.Body>
        </Popover>
      );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Image src={props.imgsrc}/>
        </OverlayTrigger>
    );
}

export default ListPopover;