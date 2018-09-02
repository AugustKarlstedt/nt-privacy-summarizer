import React, { Component } from 'react';
import { Collapse, Input, InputGroup, Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.webSocket = new WebSocket('ws://localhost:4960/echo')
    this.webSocket.onopen = (event) => {

      this.webSocket.onmessage = (event) => {
        
        if (!event.data) {
          return
        }

        if (event.data.length < 1) {
          return
        }

        let n = event.data.indexOf('=')
        let token = event.data
        let str = null
        
        if (n > 0) {
          token = event.data.substr(0, n)
          str = event.data.substr(n+1)
        }

        switch(token) {
          case "echo":
            alert(str)
            break
          case "json":
            let parsedData = JSON.parse(str)

            if (!parsedData.blks) {
              return
            }

            parsedData.blks.forEach((block) => {
              if (block.blktype === 'usertracking') {
                let statementIndex = block.stmtr[0].stmti - 1
                this.setState({
                  trackingSectionText: parsedData.stmts[statementIndex]
                })
              }
            })
            break
          case "fnc":
            // call some functions
            // used mostly for debug, I think
            break
        }

      }

      this.webSocket.send('servinfo=')

      this.setState({
        webSocketOpen: true,
      })
    }

    this.state = {
      trackingSectionOpen: false,
      sharingSectionOpen: false,
      profilingSectionOpen: false,
      webSocketOpen: false,
      urlInputValue: '',
      trackingSectionText: '',
    }
  }

  updateUrlInputValue = (event) => {
    this.setState({
      urlInputValue: event.target.value,
    })
  }

  submitUrl = (event) => {
    this.webSocket.send(`url=${this.state.urlInputValue}`)  
  }

  toggleTrackingSection = () => {
    this.setState({ trackingSectionOpen: !this.state.trackingSectionOpen })
  }

  toggleSharingSection = () => {
    this.setState({ sharingSectionOpen: !this.state.sharingSectionOpen })
  }

  toggleProfilingSection = () => {
    this.setState({ profilingSectionOpen: !this.state.profilingSectionOpen })
  }

  render() {
    return (
      <div className="App">
        <Container className="mt-4">
          <Row>
            <Col>
              <h1>NT Privacy Summarizer</h1>
              <p>NT Privacy Summarizer produces a concise summary of on online Privacy policy automatically by using Natural Language Processing (NLP) and Machine Learning (ML) technologies.</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <hr />
              <h2>Type in the URL of a privacy policy:</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <Input type="text" id="url-input" value={this.state.urlInputValue} onChange={this.updateUrlInputValue}></Input>
                <InputGroupAddon addonType="append">
                  <Button type="submit" disabled={!this.state.webSocketOpen} onClick={this.submitUrl}>Submit</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Container>
                    <Row>
                      <Col xl="auto">
                        <h3><FontAwesomeIcon icon="eye" /> User Tracking</h3>
                        <h5>Does the company use third party advertisers or trackers?</h5>
                      </Col>
                      <Col>
                        <Button className="float-right" onClick={this.toggleTrackingSection}>
                          <FontAwesomeIcon icon={this.state.trackingSectionOpen ? "chevron-up" : "chevron-down"} />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </CardHeader>
                <CardBody>
                  <CardText>
                    <Collapse isOpen={!this.state.trackingSectionOpen}>
                      Expand to view
                    </Collapse>
                    <Collapse isOpen={this.state.trackingSectionOpen} dangerouslySetInnerHTML={{__html: this.state.trackingSectionText}}>
                    </Collapse>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Container>
                    <Row>
                      <Col xl="auto">
                        <h3><FontAwesomeIcon icon="handshake" /> Data Sharing</h3>
                        <h5>Does the company share personal information with third parties? </h5>
                      </Col>
                      <Col>
                        <Button className="float-right" onClick={this.toggleSharingSection}>
                          <FontAwesomeIcon icon={this.state.sharingSectionOpen ? "chevron-up" : "chevron-down"} />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </CardHeader>
                <CardBody>
                  <CardText>

                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Container>
                    <Row>
                      <Col xl="auto">
                        <h3><FontAwesomeIcon icon="id-card" /> User Profiling</h3>
                        <h5>Does the company combine personal information with data from other sources?</h5>
                      </Col>
                      <Col>
                        <Button className="float-right" onClick={this.toggleProfilingSection}>
                          <FontAwesomeIcon icon={this.state.profilingSectionOpen ? "chevron-up" : "chevron-down"} />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </CardHeader>
                <CardBody>
                  <CardText>

                  </CardText>
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
