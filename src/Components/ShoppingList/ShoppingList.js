import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import filter from '../../images/Filter.png';
import mapLogo from '../../images/Group.png'

import Category from './Category';
import './ShoppingList.css'

const ShoppingList=()=> {

    const slist = [{
        category: "Chocolate",
        items: {
            1: "Chocolate-general",
            2: "Sam's chocolate"
        },
        aisle: 2
    }, 
    {
        category: "Beverages",
        items: {
            1: "Moosehead Beer",
            2: "Sprite Zero",
            3: "Mountain Dew"
        },
        aisle: 6
    },
    {
        category:"Meat and Seafood",
        items: {
            1: "Beef - Generic",
            2: "Foster Farm's Chicken",
            3: "Chicken - Generic"
        },
        aisle: 7
    }]

    function navHandler(event) {
        console.log('Nav button')
    }

    function mapHandler(event) {
        console.log('Map button')
    }

    return (
        <div className="shoppinglist">
            <div className="headerdiv">
                <br /><h1 className="my-3 py-2 text-center header">Shopping List</h1>
            </div>

            {/* <Form.Group className="mx-3" controlId="dob">
                <Form.Control type="date" name="shopping_date" placeholder="Trip date"/>
            </Form.Group> <br /> */}

            <Container>
                <Row className="mx-0">
                    <Col>
                        <h4 className="my-2 categoriesheader">Categories</h4>
                    </Col>
                    <Col xs={1} onClick={navHandler} className="mx-1">
                        <Image src={mapLogo} />
                        <p className="shoppingicons">Nav</p>
                    </Col>
                    <Col xs={1} onClick={mapHandler} className="mx-1">
                        <Image src={filter} />
                        <p className="shoppingicons">Filter</p>
                    </Col>
                </Row>
            </Container>

            <div className="py-3 bcolor">
                <div className="mx-4">
                    <p className="completedtext">Completed: 1/8</p>
                    {slist.map((cat, idx) => (
                        <Category key={idx} category={cat.category} items={cat.items} aisle={cat.aisle} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;