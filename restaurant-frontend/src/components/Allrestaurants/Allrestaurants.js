import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'
import { baseurl } from '../base_url'



function Allrestaurants() {
  //state(variable) to hold allrestaurant array 
  const [allitems,setAllitems]=useState([])



  //code for api calls 
  const fetchData=async()=>{
    const response=await axios.get(`${baseurl}/restaurants`)
    // console.log(response.data);
    setAllitems(response.data);

  }
  console.log(allitems);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <Row>
      {
        allitems.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* destructuring */}
            <RestaurantCard restaurants={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurants

