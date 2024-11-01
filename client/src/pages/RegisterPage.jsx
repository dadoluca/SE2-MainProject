import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import styles from './RegisterPage.module.css';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <Container className={styles.registerPage}>
      <Col md="12"> 
        <h1>Urban Planner Registration</h1>
        <Card className={styles.registerCard}>
          <Card.Body>
            <Card.Title className="text-center mb-4">Register</Card.Title>
            <RegisterForm />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default RegisterPage;
