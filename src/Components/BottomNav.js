import Nav from 'react-bootstrap/Nav'

import "./BottomNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faC, faCoins, faEllipsis, faIdCard, faListCheck} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from 'react-router-dom';

const BottomNav = () => {
    return (
        <Nav fill className="fixed-bottom bottomNav" activeKey="/home">
            <Nav.Item>
                <NavLink to="/search-new">
                    <FontAwesomeIcon icon={faC} className={"fa-xl"}/>
                    <h6>Home</h6>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/search-new">
                    <FontAwesomeIcon icon={faCoins} className={"fa-xl"}/>
                    <h6>Savings</h6>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/search-new">
                    <FontAwesomeIcon icon={faIdCard} className={"fa-xl"}/>
                    <h6>Card</h6>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/list">
                    <FontAwesomeIcon icon={faListCheck} className={"fa-xl"}/>
                    <h6>List</h6>
                </NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/search-new">
                    <FontAwesomeIcon icon={faEllipsis} className={"fa-xl"}/>
                    <h6>Menu</h6>
                </NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default BottomNav