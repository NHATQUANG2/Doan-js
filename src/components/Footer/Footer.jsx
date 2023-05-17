import React from 'react';
import "./footer.css";


import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const yaer = new  Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className='logo'>
           
            <div>
              <h1 className='text-white'>Multimart</h1>
            </div>


          </div>
          <p className="footer_text mt-4" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Amet in fugiat cumque soluta quod debitis animi laborum eveniet nulla nobis.
          </p>
        </Col>

        <Col lg='3' className='mb-4' md='3'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Categories</h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Mobile Phone</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2' className='mb-4' md='3' >
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Useful Links</h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className='footer_contact' >
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>32 Bửu Kế, Hương Văn, Hương Trà, Thừa Thiên Huế</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
                <p>+039882747576</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
                <p>quangln.htra.291103@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
        <p className="footer_copyright"> Copyright {yaer} developed by Muhibur Rabman. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;