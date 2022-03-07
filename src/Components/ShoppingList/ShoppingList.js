import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import filter from '../../images/Filter.png';
import mapLogo from '../../images/Group.png'
import addicon from '../../images/addicon.png'

import Category from './Category';
import './ShoppingList.css'

import { useState } from 'react';

function ShoppingList(props) {

    const [checked, setChecked] = useState(0);

    function navHandler(event) {
        console.log('Nav button')
    }

    function mapHandler(event) {
        console.log('Map button')
    }

    function updateChecked(event){
        let total = 0;
        for (const i of props.slist) {
            for (const j in i.items) {
                if(i.items[j]){
                    total ++;
                }
            }
        }
        setChecked(total);
    }

    function checkedHandler(category, item) {
        props.slist[category].items[item] = !props.slist[category].items[item]
        updateChecked()
    }

    return (
        <div className="shoppinglist">
            <div className="headerdiv">
                <br /><h1 className="my-3 py-2 text-center header">Shopping List</h1>
            </div>

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
                    <p className="completedtext" onClick={updateChecked}>Completed: {checked}/8</p>
                    {props.slist.map((cat, idx) => (
                        <Category key={idx} category={cat.category} items={cat.items} aisle={cat.aisle} category_num={idx} changeChecked={checkedHandler}/>
                    ))}
                </div>
            </div>
            <Image src={addicon} className="addicon" />
        </div>
    );
}

export default ShoppingList;