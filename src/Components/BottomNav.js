import Nav from 'react-bootstrap/Nav'

import "./BottomNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faC, faCoins, faEllipsis, faIdCard, faListCheck} from "@fortawesome/free-solid-svg-icons"
import {Link, NavLink} from 'react-router-dom';

const BottomNav = () => {
    return (
        <Nav fill className="fixed-bottom bottomNav" activeKey="/home">
            <Nav.Item>
                <FontAwesomeIcon icon={faC} className={"fa-xl"}/>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <FontAwesomeIcon icon={faCoins} className={"fa-xl"}/>
                <Nav.Link eventKey="link-1">Savings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/search-new">
                    <FontAwesomeIcon icon={faIdCard} className={"fa-xl"}/>
                    <Nav.Link eventKey="link-2">Card</Nav.Link>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/list">
                    <FontAwesomeIcon icon={faListCheck} className={"fa-xl"}/>
                    <Nav.Link>List</Nav.Link>
                </NavLink>
            </Nav.Item>

            <Nav.Item>
                <FontAwesomeIcon icon={faEllipsis} className={"fa-xl"}/>
                <Nav.Link eventKey="link-4">Menu</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default BottomNav