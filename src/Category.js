import Alert from 'react-bootstrap/Alert'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Category(props) {

    function itemHandler(event) {
        console.log(event.target.textContent);
    }

    const items = Object.values(props.items)
    return (
        <div className="mx-4">
            <h5>{props.category}</h5><hr />
            {items.map((item, idx) => (
                <Alert variant="primary" key={idx} onClick={itemHandler}>
                    <Container>
                        <Row>
                        <Col>{item}</Col>
                        <Col xs={3}>Aisle {props.aisle}</Col>
                        </Row>
                    </Container>
                </Alert>
            ))}
        </div>
    );
}

export default Category;