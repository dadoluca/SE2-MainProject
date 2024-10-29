import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Card } from 'react-bootstrap'; 


function DocumentInsert() {
  return (
    <>
    <Card>
        <Card.Title>Insert document</Card.Title>
        <Card.Body>
            <FloatingLabel
            label="Title of the document"
            className="mb-3"
            required
        >
            <Form.Control type="text" />
        </FloatingLabel>
        <FloatingLabel
            label="Stakeholders"
            className="mb-3"
            required
        >
            <Form.Control type="text"  />
        </FloatingLabel>
        <FloatingLabel
            label="Scale"
            className="mb-3"
            required
        >
            <Form.Control type="text" />
        </FloatingLabel>
        <FloatingLabel
            label="Issuance date"
            className="mb-3"
        >
            <Form.Control type="date"/>
        </FloatingLabel>
        <FloatingLabel
            label="Type of the document"
            className="mb-3"
            required
        >
            <Form.Control type="text" />
        </FloatingLabel>
        <FloatingLabel
            label="Connections"
            className="mb-3"
            required
        >
            <Form.Control type="number" />
        </FloatingLabel>
        <FloatingLabel
            label="Title of the document"
            className="mb-3"
            required
        >
            <Form.Control type="text"  />
        </FloatingLabel>
        <FloatingLabel
            label="Language"
            className="mb-3"
        >
            <Form.Control type="text" />
        </FloatingLabel>
        <FloatingLabel
            label="Pages"
            className="mb-3"
        >
            <Form.Control type="number" />
        </FloatingLabel>
        <Row className="align-items-end">
            <Col md={6}>
                    <FloatingLabel
                            label="Latitude"
                            className="mb-3"
                    >
                        <Form.Control type="text" />
                    </FloatingLabel>
            </Col>
            <Col md={6}>
                <FloatingLabel
                    label="Longitude"
                    className="mb-3"
                >
                    <Form.Control type="text" />
                </FloatingLabel>
            </Col>
        </Row>
        </Card.Body>
        <div className="buttons">
            <Row>
                <Col>
                    <Button className="mt-3" type="submit">Add</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="mt-3" variant="danger">Back</Button>
                </Col>
            </Row>
        </div>
    </Card>
    </>
  );
}

export {DocumentInsert};