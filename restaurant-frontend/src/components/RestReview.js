import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({review}) {
    const [open, setOpen] = useState(false);
    console.log(review);

  return (
    <div>
         <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        User Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {
            review?.map(item=>(
                <div className='mt-3 border rounded p-2'>
                <h6>User: {item.name}</h6>
                <h6>Posted on: {item.date}</h6>
                <h6>Rating: {item.rating}</h6>
                <h6>Comment: {item.comments}</h6>
                </div>
            ))
         }
        </div>
      </Collapse>
    </div>
  )
}

export default RestReview