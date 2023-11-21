import React from 'react'
import my from "../assets/foto/acu.jpeg";
import {Form, FormControl, Button} from "react-bootstrap"




const Contact = () => {
  return (
    <div className="kontainer" id="contact">
        <div className="item">
            <div className="kontak">
                <div className="first-text"> Let's Get In Touch</div>
                <img src={my}/>
                <div className="social-link">
                    <span className="second-text">Connect With Me</span>
                    <ul className="sosmed">
                        <li><a href="https://www.instagram.com/elsharahmal_/"><i class='bx bxl-instagram'></i></a></li>
                        <li><a href="https://www.tiktok.com/@jmecsh?lang=id-ID"><i class='bx bxl-tiktok'></i></a></li>
                        <li><a href="https://twitter.com/rahma_elsha"><i class='bx bxl-twitter'></i></a></li>
                        <li><a href="https://open.spotify.com/intl-id"><i class='bx bxl-spotify'></i></a></li>
                        
                    </ul>
                </div>
            </div>
            <div className="submit-form">
                <h3 className="third-text"> Contact Me</h3>
                <Form>
                    <div className="input-box">
                    <FormControl type="text" className="input" placeholder="Nama" />
                    </div>

                    <div className="input-box">
                    <FormControl type="email" className="input" placeholder="Email" />
                    </div>

                    <div className="input-box">
                    <FormControl type="number" className="input" placeholder="Phone" />
                    </div>

                    <div className="input-box">
                    <textarea type="text" className="erateks" placeholder="Pesan" cols="35" rows="5" />
                    <a href="Home.js"><Button  className="but bg">Submit</Button></a>
                    </div>
                    
                    
                </Form>
                
            </div>
           
        </div>
    </div>
  )
}

export default Contact;