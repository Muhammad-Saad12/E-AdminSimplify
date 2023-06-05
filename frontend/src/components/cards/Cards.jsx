import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <>
    <Card style={{ width: '18rem', margin: '2rem'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Something will be added here soon</Card.Subtitle>
        <Card.Link href="#">Go to {props.title}</Card.Link>
      </Card.Body>
    </Card>
    </>
    
  )
}

export default Cards