import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Card } from 'react-bootstrap'; 

function DocumentInsert() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [stakeholders, setStakeholders] = useState('');
    const [type, setType] = useState('');
    const [scale, setScale] = useState('');
    const [date, setDate] = useState('');
    const [connections, setConnections] = useState(0);
    const [pages, setPages] = useState('');
    const [language, setLanguage] = useState('');
    const [longitude, setLongitude] = useState(0.0);
    const [latitude, setLatitude] = useState(0.0);

    const [stakeholdersArray, setStakeholdersArray] = useState([]);

    const handlestakeholders = (ev) => {
        setStakeholders(ev.target.value);
        setStakeholdersArray(ev.target.value.split(','));
    }

    const handleSubmit = async()=>{
        const document = {
            title: title,
            stakeholders: stakeholdersArray,
            type: type,
            scale: scale,
            date: date,
            connections: connections,
            pages: pages,
        }

        /* TEST ON FAKE DB
        try {
            const response = await fetch('http://localhost:3001/documents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(document),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Document added:', result);
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.error('Network error: ', error);
        }*/
    };   

    const handleReturnHome = () => {
        navigate('/');
    }
    

    return (
        <>
        <Card>
            <Card.Title>Insert document</Card.Title>
            <Card.Body>
                <FloatingLabel
                label="Title of the document"
                className="mb-3"
            >
                <Form.Control type="text" value={title}               
                    onChange={(ev) => setTitle(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Stakeholders"
                className="mb-3"
            >
                <Form.Control type="text"  value={stakeholders}
                    onChange={(ev) => handlestakeholders(ev)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Scale"
                className="mb-3"
            >
                <Form.Control type="text" value={scale}
                    onChange={(ev) => setScale(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Issuance date"
                className="mb-3"
                
            >
                <Form.Control type="date" value={date}
                    onChange={(ev) => setDate(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Type of the document"
                className="mb-3"
            >
                <Form.Control type="text" value={type}
                    onChange={(ev) => setType(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Connections"
                className="mb-3"
            >
                <Form.Control type="number" value={connections}
                    onChange={(ev) => setConnections(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Language"
                className="mb-3"
            >
                <Form.Control type="text" value={language}
                    onChange={(ev) => setLanguage(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <FloatingLabel
                label="Pages"
                className="mb-3"
            >
                <Form.Control type="text" value={pages}
                    onChange={(ev) => setPages(ev.target.value)}
                    required={true}/>
            </FloatingLabel>
            <Row className="align-items-end">
                <Col md={6}>
                        <FloatingLabel
                                label="Latitude"
                                className="mb-3"
                        >
                            <Form.Control type="number" value={latitude}
                                onChange={(ev) => setLatitude(ev.target.value)}
                                required={true}/>
                        </FloatingLabel>
                </Col>
                <Col md={6}>
                    <FloatingLabel
                        label="Longitude"
                        className="mb-3"
                    >
                        <Form.Control type="number" value={longitude}
                            onChange={(ev) => setLongitude(ev.target.value)}
                            required={true}/>
                    </FloatingLabel>
                </Col>
            </Row>
            </Card.Body>
            <div className="buttons">
                <Row>
                    <Col>
                        <Button className="mt-3" type="submit" onClick={handleSubmit}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="mt-3" variant="danger" onClick={handleReturnHome}>Back</Button>
                    </Col>
                </Row>
            </div>
        </Card>
        </>
  );
}

export default DocumentInsert;