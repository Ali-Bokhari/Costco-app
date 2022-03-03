import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import navLogo from './images/bx_navigation.png';
import mapLogo from './images/et_map.png'

import Category from './Category';

function ShoppingList() {

    const slist = {
        category: "Chocolate",
        items: {
            1: "Chocolate-general",
            2: "Sam's chocolate"
        },
        aisle: 2
    }

    function navHandler(event) {
        console.log('Nav button')
    }

    function mapHandler(event) {
        console.log('Map button')
    }

    return (
        <div>
            <h1 className="my-3 text-center">Shopping List</h1><br />
            <Form.Group className="mx-3" controlId="dob">
                <Form.Control type="date" name="shopping_date" placeholder="Trip date"/>
            </Form.Group> <br />

            <Container>
                <Row className="mx-3">
                    <Col>
                    </Col>
                    <Col xs={2} onClick={navHandler}>
                        <Image src={navLogo} />
                        Nav
                    </Col>
                    <Col xs={2} onClick={mapHandler}>
                        <Image height="30" src={mapLogo} />
                        Map
                    </Col>
                </Row>
            </Container>

            <h4 className="mx-3">Category</h4><br />
            <Category category={slist.category} items={slist.items} aisle={slist.aisle} />
        </div>
    );
}

export default ShoppingList;