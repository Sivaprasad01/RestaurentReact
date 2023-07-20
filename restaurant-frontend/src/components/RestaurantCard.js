import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'white',fontFamily:'Bruno Ace'}}>
      <Card className='m-3'>
    <Card.Img variant="top" src={restaurants.photograph} />
    <Card.Body>
      <Card.Title>{restaurants.name}</Card.Title>
      <Card.Text>{restaurants.neighborhood} <br/>
      {restaurants.address}
      
      </Card.Text>
    </Card.Body>
  </Card>
      </Link>

  </div>
  )
}

export default RestaurantCard