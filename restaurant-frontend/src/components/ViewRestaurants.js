import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseurl } from './base_url';
import axios from 'axios';
import { Col, Row, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOperatingHours from './RestOperatingHours';
import RestReview from './RestReview';





function ViewRestaurants() {

    //create a state to hold data of particular id 
    const [RestDetails,setRestDetails] = useState({})

    // const pathParams = useParams()
    // console.log(pathParams);
    const {id} = useParams()
    console.log(id);

    //api call to fetch particular restaurant details 
    const fetchData=async()=>{
        const {data}= await axios.get(`${baseurl}/restaurants/${id}`)
        // console.log(data);
        setRestDetails(data);
    }
    console.log(RestDetails);
    useEffect(()=>{
        fetchData()
    },[])
  
  return (
    <div>
        {
            RestDetails?
        <Row>
        <Col className='ms-5' sm={12} md={3}>
            <Image className='border rounded p-2 ' src={`${RestDetails?.photograph}`} fluid/>
        </Col>
        <Col md={8} className='border rounded p-2 '>
            <h2>{RestDetails?.name}</h2>
            <h4>{RestDetails?.neighborhood}</h4>
            <h4>{RestDetails?.address}</h4>
            <ListGroup>
                <ListGroup.Item>Cuisine:{RestDetails?.cuisine_type}</ListGroup.Item>
                <ListGroup.Item><RestOperatingHours op={RestDetails?.operating_hours}/></ListGroup.Item>
                <ListGroup.Item><RestReview review={RestDetails?.reviews}/></ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>:''
        }

    </div>
  )
}

export default ViewRestaurants