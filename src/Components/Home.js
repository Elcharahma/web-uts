import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
const Home = () => {
  return (
    <div className="jumb min-vh-100 w-100" id="home" >
        <Container>
            <Row>
            <div data-aos="fade-up"data-aos-duration="2000">

                <Col className="text-white text-center">
                   <h1>W E L C O M E</h1>
                   <p>Halo, mari kita mulai petualangan penjelajahan biodata ini bersama.</p>
                   
                </Col>
                </div>
            </Row>
        </Container>
        </div>
  )
}

export default Home
