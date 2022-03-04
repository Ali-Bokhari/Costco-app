import {Form} from "react-bootstrap";
import "./AddNewItemBar.css"
import SearchResultItem from "./SearchResultItem";

const AddNewItemBar = () => {
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

export default AddNewItemBar