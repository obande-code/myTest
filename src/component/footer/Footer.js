import React from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'

import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="personal">
                < Container>
                <Row>
                    <Col sm={6} md={2}>
                        <ul className="list1">
                            <li><Nav.Link className="personal1" href="#">Personal</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Services</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Devices</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Data</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Getting Started</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">myMTN APP</Nav.Link></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={2}>
                        <ul className="list2">
                            <li><Nav.Link className="personal1" href="#">Business</Nav.Link></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={2}>   
                        <ul className="list3">
                            <li><Nav.Link className="personal1" href="#">Investors</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">More Investors</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Shareholders</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Finanavcial Reporting</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Announcements</Nav.Link></li>
                        
                        </ul>
                    </Col>
                    <Col sm={6} md={2}>  
                        <ul className="list4">
                            <li><Nav.Link className="personal1" href="#">Foundation</Nav.Link></li>   
                        </ul>
                    </Col>
                    <Col sm={6} md={2}> 
                        <ul className="list5">
                            <li><Nav.Link className="personal1" href="#">Events</Nav.Link></li>   
                        </ul>
                    </Col>
                    <Col sm={6} md={2}>  
                        <ul className="list6">
                            <li><Nav.Link className="personal1" href="#">Support</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Help Center</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">Community</Nav.Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={2}>  
                        <ul className="list6">
                            <li><Nav.Link className="personal1" href="#">About Us</Nav.Link></li>
                            
                        </ul>
                    </Col> 
                    <Col sm={6} md={2}>  
                        <ul className="list6">
                            <li><Nav.Link className="personal1" href="#">Careers</Nav.Link></li>
                            
                        </ul>
                    </Col> 
                    <Col sm={6} md={2}>  
                        <ul className="list6">
                            <li><Nav.Link className="personal1" href="#">Contact Us</Nav.Link></li>
                            <li><Nav.Link className="others" href="#">MTN supplier</Nav.Link></li>
                        </ul>
                    </Col> 
                </Row>
                <Row>
                   <Col sm={12} md={6}>  
                   <div className="icons">
                        <div className="facebook"><i style={{color:'#ffffff'}} className="fab fa-facebook-f fa-2x"></i></div>
                        <div className="twitter"><i style={{color:'#ffffff'}} className="fab fa-twitter fa-2x"></i></div>
                        <div className="linkdin"><i style={{color:'#ffffff'}} className="fab fa-linkedin-in fa-2x"></i></div>
                        <div className="youtube"><i style={{color:'#ffffff'}} className="fab fa-youtube fa-2x"></i></div>
                        <div className="instagram"><i style={{color:'#ffffff'}} className="fab fa-instagram fa-2x"></i></div>                            
                   </div>
                   </Col>
                   <Col sm={12} md={6}>  
                   <div className="myselect">
                     <label htmlFor="country"></label>      
                            <select id="country" name="country" className="form-control">
                                <option value="Afghanistan">Nigeria</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>  
                            </select>  
                   </div>
                   </Col>  
                </Row>
                <div className="copy">
                <p>© 2020 MTN Nigeria Communications PLC, All rights reserved.</p>
                <p>Privacy Policy & Data Protection</p>
                </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer
