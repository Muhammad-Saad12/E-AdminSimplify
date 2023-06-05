import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState, useEffect  } from 'react'
import { useNavigate } from "react-router-dom";

import {Navbox } from '../../components'

const Profile = () => {
    const navigate = useNavigate();
    const [admin, setadmin] = useState([])

   


    const updateAPIData = async (e) => {
        
        e.preventDefault()
        axios.put('http://localhost:5000/profile/update', {
            name,
            Age,
            username,
            password
        })
        navigate('../profile')
    }

    const [name, setname] = useState('');
    const [Age, setAge] = useState('');
    const [username, setuser] = useState('');
    const [password, setpass] = useState('');

    useEffect(() => {
        (async () =>
        {
          axios.get("http://localhost:5000/profile/get",  { 
          crossdomain: true 
        }).then(response => {
            setadmin(response.data)
          // setText(response.data.text);
          // setAuthor(response.data.author);
        });
          
       })(
       );
      },[]);

        
      

      
      

    
      

  return (
    <div>
        {/* <Navbox></Navbox> */}
        {/* <Container >
        <Row className=' justify-content-md-center'>
            <h2>Admin Profile</h2>
        </Row>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder={admin.name} onChange={(e) => setname(e.target.value)}/>
        <br></br>
        <Form.Label>Age</Form.Label>
        <Form.Control placeholder={admin.Age} onChange={(e) => setAge(e.target.value)}/>
        <br></br>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={admin.username} readOnly />
        <br></br>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" value={admin.password} readOnly />

        </Form.Group>
        <br></br>
      <Button variant="secondary" type="submit" onClick={updateAPIData}>
        Update
      </Button>
     
    </Form>
    </Container> */}
    </div>
  )
}

export default Profile