import React from 'react'
import {Container,Row, Col} from "react-bootstrap";
import fotogue2 from "../assets/foto/raham.jpeg";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

const About = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="about" id="about">
        <Container>
            <Row className="all">
                <Col className="teks">
                <h1>About Me</h1>
                <h2>Get To Know Me</h2>
                <p>Halo nama aku Elsha Rahma Listyanti, sering dipanggil Echa <br/>
                    atau Elsha. Aku berasal dari Bandung tepatnya di Ujungberung.
                    Aku lahir pada tanggal 18 Desember 2003, aku anak ke-1 dari 2 bersaudara.
                    Aku pernah bersekolah di SMK Negeri 13 Bandung dengan jurusan Rekayasa
                    Perangkat Lunak. Dan sekarang kuliah aku memilih Jurusan Pendidikan Ilmu 
                    Komputer, kenapa memilih Pilkom? supaya jurusan saat SMK aku selaras dengan 
                    aku kuliah</p>
                </Col>
                <Col>
                <img src={fotogue2}/>
                </Col>
            </Row>
            <>
      <Button className="buton"
        variant="light"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Fun Fact
      </Button>
      <Fade in={open} className="fade">
        <div id="example-fade-text">
        Aku suka nonton drakor kalau sedang gabut, dan menonton film action
        </div>
      </Fade>
     
    </>
        </Container>
    </div>
  )
}

export default About