
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
  return (
  <Container fluid>

      <Row>
        <Col >
        <div className='services p-6 '>
       <div className='title'>
        <h1>Laice consultancy</h1>
        <h3>Our company offers educational consultancy and work 
        permit services for individuals seeking to go abroad, collaborating 
        with various institutions to provide quality educational opportunities and partnering
         with companies to obtain necessary work permits.</h3>
       </div>
        </div>
       </Col>
      
        <Col> 
        <div className='icon  p-6'>
        <img src="https://i.pinimg.com/564x/1b/ed/eb/1bedeb9763233ccd4956fbd238073b2c.jpg" alt="#" />

       </div>
        </Col>
      </Row>
    
      </Container>
  )
}
