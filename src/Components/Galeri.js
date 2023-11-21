import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import eca from "../assets/foto/eca.jpeg";
import dini from "../assets/foto/dini.jpeg";
import smk from "../assets/foto/smk.jpeg";
import kos from "../assets/foto/kos.jpeg";
import elz from "../assets/foto/elz.jpg";
import sd from "../assets/foto/sd.jpeg";


const Galeri = () => {
  return (
    <div className="galeri" id="galeri"> 
     
   <Container>
    <Row>
        <Col className="bodi">
        <h1 className="headgal text-center text-white">My Gallery</h1>
        <div className="gsatu">
        <img src={eca}/>
        <img src={dini}/>
        <img src={smk}/>
        </div>
        <div className="gsatu">
        <img src={sd}/>
        <img src={elz}/>
        <img src={kos}/>
        </div>
        
        </Col>
    </Row>
   </Container>
   </div>
  )
}

export default Galeri