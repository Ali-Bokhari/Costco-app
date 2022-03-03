import Alert from 'react-bootstrap/Alert'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Category(props) {

    const items = Object.values(props.items)
    return (
        <div className="mx-4">
            <h5>{props.category}</h5><hr />
            {items.map((item, idx) => (
                <Alert variant="primary" key={idx}>
                    {item}
                </Alert>
            ))}
        </div>
    );
}

export default Category;