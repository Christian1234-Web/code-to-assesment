import React, { useState } from 'react'
import { Col, Container, Row, Card, Input, Label, FormGroup, Form, Button, CardBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function CreateEvent() {
  const [hostname, setHostname] = useState('');
  const [eventname, setEventname] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const navigate = useNavigate();


  const onchangeImg = e => {
    const reader = new FileReader(),
      files = e.target.files;
    setImage(e.target.files[0]);
    reader.onload = function () {
      setImage(reader.result);
    }
    reader.readAsDataURL(files[0]);
  };


  const saveEvent = (e) => {
    e.preventDefault();
    let data = { hostname, eventname, location, image, enddate, startdate };
    localStorage.setItem("newEvent", JSON.stringify(data));

    navigate('/event');
  }
  return (
    <Container fluid>
      <Card style={{ border: 'none' }}>
        <Row>
          <Col xl={12}>
            <div className='text-center header_landing' style={{ marginTop: '30px' }}>
              <h1 className='header_text_landing ' >Imagine if <span id='snapchat'>Snapchat</span> had events.</h1>
            </div>
            <p className='txtsmall_landing text-center'>Easily host and share events withs friends acorss any social media.</p>
          </Col>
        </Row>

      </Card>
      <Card style={{ border: 'none' }}>
        <CardBody>
          <div className='d-flex justify-content-center'>
            <div >
              <Form onSubmit={(e) => saveEvent(e)} style={{ width: '100%' }}>
                <FormGroup>
                  <Label for="name">
                    Event name
                  </Label>
                  <Input
                    id="name"
                    name="text"
                    placeholder="enter event name"
                    type="text"
                    onChange={e => setEventname(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="hostname">
                    Host name
                  </Label>
                  <Input
                    id="hostname"
                    name="hostname"
                    placeholder="Enter host name"
                    type="text"
                    onChange={e => setHostname(e.target.value)}

                  />
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col>
                      <Label for="startdate">
                        Start date
                      </Label>
                      <Input
                        id="startdate"
                        name="startdate"
                        placeholder="Enter start date"
                        type="date"
                        onChange={e => setStartdate(e.target.value)}

                      />
                    </Col>
                    <Col>
                      <Label for="startdate">
                        End date
                      </Label>
                      <Input
                        id="enddate"
                        name="enddate"
                        placeholder="Enter end date"
                        type="date"
                        onChange={e => setEnddate(e.target.value)}

                      />
                    </Col>

                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label for="location">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    type="text"
                    onChange={e => setLocation(e.target.value)}

                  />
                </FormGroup>
                <FormGroup>
                  <Label for="img">
                    File
                  </Label>
                  <Input
                    id="img"
                    name="file"
                    type="file"
                    onChange={e => onchangeImg(e)}

                  />

                </FormGroup>
                <Button className='create_event_btn'>
                 Next

                </Button>
              </Form>
            </div>
            <div></div>
          </div> 
        </CardBody>
      </Card>
    </Container>

  )
}

export default CreateEvent