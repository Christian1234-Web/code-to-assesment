import React from 'react'
import { Col, Container, Row, Card, ListGroup, ListGroupItem } from 'reactstrap';
import { FiCalendar, FiMapPin } from "react-icons/fi";

function Event() {

    const x = localStorage.getItem("newEvent");
    const event = JSON.parse(x);

    return (
        <>
            <Container fluid className='eventcontainer'>
                <Card style={{ border: 'none' }}>
                    <Row>
                        <Col xl={6}>
                            <div>
                                <img src={event?.image} className='img-fluid eventimg' alt='event' />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div>
                                <h1 className='eventname text-capitalize' contentEditable='true'>{event?.eventname}</h1>
                            </div>
                            <div>
                                <p className='hostname text-capitalize' contentEditable='true'>{event?.hostname}</p>
                            </div>
                            <div>
                                <ListGroup >
                                    <ListGroupItem >
                                        <div className='listgroupheader' contentEditable='true'><FiCalendar color='#8456EC' size={20} /> {new Date(event?.startdate).toDateString()}</div>
                                        <span className='listgroupsmtxt' contentEditable='true'>{new Date(event?.enddate).toDateString()}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className='listgroupheader'><FiMapPin color='#8456EC' size={20} /> Street name</div>
                                        <span className='listgroupsmtxt text-capitalize' contentEditable='true'>{event?.location}</span>
                                    </ListGroupItem>

                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Card>

            </Container>
        </>
    )
}

export default Event