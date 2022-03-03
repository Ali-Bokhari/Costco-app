import Nav from 'react-bootstrap/Nav'

import "./BottomNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faC, faCoins, faIdCard, faListCheck, faEllipsis} from "@fortawesome/free-solid-svg-icons"

const BottomNav = () => {
    return(
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
                <FontAwesomeIcon icon={faIdCard} className={"fa-xl"}/>
                <Nav.Link eventKey="link-2">Card</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <FontAwesomeIcon icon={faListCheck} className={"fa-xl"}/>
                <Nav.Link eventKey="link-3">List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <FontAwesomeIcon icon={faEllipsis} className={"fa-xl"}/>
                <Nav.Link eventKey="link-4">Menu</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default BottomNav