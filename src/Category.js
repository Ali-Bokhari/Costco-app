import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion';

import './Category.css'

function Category(props) {

    function itemHandler(event) {
        console.log(event.target.textContent);
    }

    const items = Object.values(props.items)
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border border-0 border-white">
            <Accordion.Header className="bcolor">{props.category}</Accordion.Header>
            <Accordion.Body className="bcolor">
            {items.map((item, idx) => (
                <Alert variant="light" key={idx} onClick={itemHandler} className="py-1 border-dark">
                    <Container>
                        <Row>
                        {/* <Col xs={1}><Form.Check className=""/></Col> */}
                        <Col>{item}</Col>
                        <Col xs={3}>Aisle {props.aisle}</Col>
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