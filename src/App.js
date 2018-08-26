import React, { Component } from 'react';
import { Input, InputGroup, Button, Container, Row, Col, Card, CardHeader, CardBody, CardText, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="mt-4">
          <h1>NT Privacy Summarizer</h1>
          <p>NT Privacy Summarizer produces a concise summary of on online Privacy policy automatically by using Natural Language Processing (NLP) and Machine Learning (ML) technologies.</p>
          <hr />
          <h2>Type in the URL of a privacy policy:</h2>
        </Container>
        <Container className="mb-4">
          <Row>
            <Col>
              <InputGroup>
                <Input type="text" id="url-input"></Input>
                <InputGroupAddon addonType="append">
                  <Button type="submit">Submit</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h3>User Tracking</h3>
                </CardHeader>
                <CardBody>
                  <CardText className="text-center">
                  <FontAwesomeIcon icon="eye" size="4x" />
                  <p>Does the company use third party advertisers or trackers?</p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
              <CardHeader>
              <h3>Data Sharing</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <FontAwesomeIcon icon="handshake" size="4x" />
                  <p>Does the company share personal information with third parties?</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
              <CardHeader>
              <h3>User Profiling</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <FontAwesomeIcon icon="id-card" size="4x" />
                  <p>Does the company combine personal information with data from other sources?</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
