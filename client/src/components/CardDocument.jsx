import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailPlanCard = (props) => {
  return (
    <Card style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Card.Title className="text-center" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>
          Detail plan for {props.title}
        </Card.Title>

        <ListGroup variant="flush">
          <ListGroup.Item><strong>Stakeholders:</strong> </ListGroup.Item>
          {props.stakeholders.map((item, value)=>{
            return <ListGroup.Item key={value}>{item}</ListGroup.Item>
          })}
          <ListGroup.Item><strong>Scale:</strong> {props.scale}</ListGroup.Item>
          <ListGroup.Item><strong>Issuance date:</strong> {props.date}</ListGroup.Item>
          <ListGroup.Item><strong>Type:</strong> {props.type}</ListGroup.Item>
          <ListGroup.Item><strong>Connections:</strong> {props.connections}</ListGroup.Item>
          <ListGroup.Item><strong>Language:</strong> {props.language}</ListGroup.Item>
          <ListGroup.Item><strong>Pages:</strong> {props.page}</ListGroup.Item>
        </ListGroup>

        <Card.Text style={{ marginTop: '20px', fontSize: '14px', color: '#555' }}>
          <strong>Description:</strong> {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

DetailPlanCard.propTypes = {
    title: PropTypes.string,
    stakeholders: PropTypes.array,
    description: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    connections: PropTypes.number,
    pages: PropTypes.string,
    scale: PropTypes.string
}

export default DetailPlanCard;
