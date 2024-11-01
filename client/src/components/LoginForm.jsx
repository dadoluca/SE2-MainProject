
import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from './LoginForm.module.css';

function LoginForm() {
  const { handleLogin } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
      event.preventDefault();
      
      const credentials = { username, password };
      
      handleLogin(credentials);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='username' className='mb-3'>
        <Form.Label>Email</Form.Label>
          <Form.Control type='email' value={username} onChange={ev => setUsername(ev.target.value)} required />
      </Form.Group>

      <Form.Group controlId='password' className='mb-3'>
        <Form.Label>Password</Form.Label>
          <Form.Control type='password' value={password} onChange={ev => setPassword(ev.target.value)} required minLength={6} />
        </Form.Group>

        <div className={styles.buttonContainer}>
          <Link className='btn btn-light w-100 border-dark' to={'/'}>Cancel</Link>
          <Button type='submit' className="btn-dark w-100 ms-2">Login</Button>
      </div>
    </Form>
  )
};

export default LoginForm;
