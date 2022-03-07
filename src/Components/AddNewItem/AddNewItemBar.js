import {Form} from "react-bootstrap/esm/index";
import "./AddNewItemBar.css";
import SearchResultItem from "./SearchResultItem";

const AddNewItemBar = (props) => {
    return(
        <div className="addNewItemBar">
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" placeholder="Search for grocery items here..." />
                </Form.Group>
            </Form>

            <SearchResultItem/>
            <SearchResultItem/>
            <SearchResultItem/>
        </div>
    )

}

export default AddNewItemBar;