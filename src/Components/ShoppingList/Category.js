import Alert from 'react-bootstrap/esm/Alert'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Accordion from 'react-bootstrap/esm/Accordion';
import Form from 'react-bootstrap/Form';

import './Category.css'

function Category(props) {

    function itemHandler(event) {
        // console.log(event);
        // console.log(Object.keys(props.items)[event.target.getAttribute('data-key')]);
        // console.log(props.category_num);
        props.changeChecked(props.category_num, Object.keys(props.items)[event.target.getAttribute('data-key')]);
    }

    let itemclass= "text-center";

    const items = Object.keys(props.items);
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border border-0 border-white">
            <Accordion.Header className="bcolor">{props.category}</Accordion.Header>
            <Accordion.Body className="bcolor">
            {items.map((item, idx) => (
                <Alert variant="light" key={idx} disabled data-key={idx} onClick={itemHandler} className="py-1 border-dark">
                    <Container>
                        <Row className="itemrow">
                        <Col data-key={idx} xs={1} ><Form.Check disabled checked={props.items[item.toString()]} className=""/></Col>
                        {/* {if (props.items[item.toString()]) {itemclass += " strikethrough"}} */}
                        <Col data-key={idx} className='text-center'>{item}</Col>
                        <Col data-key={idx} xs={3}>Aisle {props.aisle}</Col>
                        </Row>
                    </Container>
                </Alert>
            ))}
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Category;