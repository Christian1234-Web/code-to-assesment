import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';

function Landing() {
    return (
        <Container fluid>
            <Row>
                <Col xl={6}>
                    <div className='text-center header_landing'>
                        <h1 className='header_text_landing ' >Imagine if <span id='snapchat'>Snapchat</span> had events.</h1>
                    </div>
                    <p className='txtsmall_landing text-center'>Easily host and share events withs friends acorss any social media.</p>
                </Col>
                <Col xl={6}>
                    <Card style={{ border: 'none' }}>
                        <CardBody>
                            <div className='landing_card' >
                                <div>
                                    <img width='100%' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T161630Z&X-Amz-Expires=86400&X-Amz-Signature=b14db5facdbb9169110e7f2dff48893efde1a566207509a7b03fa23c4ade65b0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject' alt='fjf' />
                                </div>
                                <div className='pt-3 mx-4'>
                                    <Link to='/create-event'>
                                        <Button className='create_event_btn'>
                                            Create my event

                                        </Button>
                                    </Link>


                                </div>
                            </div>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Landing