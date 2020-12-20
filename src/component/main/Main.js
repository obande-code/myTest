import React from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'
import './Main.css'
import download from '../../assets/download.svg'

const Main = () => {
    return (
        <>
        <div className="main">
            <div className="back-button">
            <Button variant="warning"><i class="fas fa-chevron-left" style={{marginRight:'5px'}}></i>Back</Button>{' '}
            </div>
            <div className="hero-content">
            <h3 className="contact"> Contact</h3>
            <h3 className="mtn">MTN Suppliers</h3>
            </div>
        </div>
        <div className="section-2">
        <Container>
            <div className="section-2-cont">
            <h3>
            Existing MTN supplier
            </h3>
            <p>MTN has a responsibility to ensure that our business practices are conducted according to local and international laws, and adhere to the highest levels of ethical and moral conduct.</p>
            <p>We embrace this across all parts of our business, and we expect the same from our suppliers. The Supplier Code of Conduct sets out our approach to ethical and sustainable business practices and aims for the highest ethical conduct. It outlines our commitment to respect and promote human rights and fair workplace practices, including equal opportunities, environmentally sustainable business activities, and a zero-tolerance policy to bribery and corruption.</p>
            <p>
            MTN expects its suppliers to embrace this commitment to integrity by complying with and training its employees and subcontractors on the Supplier Code of Conduct.
            </p>
            <p>
            By working together, we can make the customer’s lives a whole lot brighter.
            </p>
            </div>
            <div className="cardi">
            <Row>
                <Col sm={12} md={6}>
                <Card className="card-shape">
                <Card.Body>
                    <div className="cardb">
                        <div className="card-content">
                        <h6> Supplier Privacy Notice </h6>
                        <p>(2 MB-PDF)</p>
                        </div>
                    <img src={download} alt='download' />
                    </div>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={12} md={6}>
                <Card className="card-shape">
                <Card.Body>
                <div className="cardb">
                        <div className="card-content">
                        <h6> Supplier Privacy Notice </h6>
                        <p>(2 MB-PDF)</p>
                        </div>
                    <img src={download} alt='download' />
                    </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
        </Container>
        </div>
        <div className="supplier">
            <Container>
                    <div className="supplier-content">
                        <h3>
                        Become an MTN supplier
                        </h3>
                        <p>If you believe you can join MTN’s vision to make our customers lives a whole lot brighter, then click on apply below to fill in the registration fo</p>
                        <Row>
                        <Col sm={12} md={6}>
                        <Card className="card-shape">
                        <Card.Body>
                        <div className="cardb">
                        <div className="card-content">
                        <h6> Supplier Privacy Notice </h6>
                        <p>(2 MB-PDF)</p>
                        </div>
                        <img src={download} alt='download' />
                        </div>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6}>
                        <Card className="card-shape">
                        <Card.Body>
                        <div className="cardb">
                        <div className="card-content">
                        <h6> Supplier Privacy Notice </h6>
                        <p>(2 MB-PDF)</p>
                        </div>
                        <img src={download} alt='download' />
                        </div>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </div>
            </Container>
        </div>
        </>
    )
}

export default Main
