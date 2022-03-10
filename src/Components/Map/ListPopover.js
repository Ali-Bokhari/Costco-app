import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import './ListPopover.css'

function ListPopover(props) {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Body className="my-0">
            <ListGroup>
                {props.items.map((item, idx) => (
                    <Container key={idx}>
                    <Row className="itemrow">
                        <Col data-key={idx} xs={1} ><Form.Check disabled className="my-1" checked={item.isChecked}/></Col>
                        <Col className="px-1 listfont">{item.name}</Col>
                    </Row>
                    </Container>
                ))}
            </ListGroup>
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