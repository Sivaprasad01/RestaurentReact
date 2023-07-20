import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> 
{' '}
            <h4 className='mt-3' style={{ marginLeft: "50px", fontFamily:'Bruno Ace' }}>
              <img
              alt=""
              src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png"
              width="65"
              height="65"
              className="d-inline-block align-top pb-3 "
            /> 
            {/* <i class="fa-solid fa-utensils fa-fade mt-2"></i>  */}
            Highway_Hangouts 
            <img
              alt=""
              src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png"
              width="65"
              height="65"
              className="d-inline-block align-top pb-3 "
            /></h4>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}


export default Header