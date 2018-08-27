import React, { Component } from 'react';
import { Collapse, Input, InputGroup, Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      trackingSectionOpen: false,
      sharingSectionOpen: false,
      profilingSectionOpen: false,
    }
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
                <Input type="text" id="url-input"></Input>
                <InputGroupAddon addonType="append">
                  <Button type="submit">Submit</Button>
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
                    <Collapse isOpen={this.state.trackingSectionOpen}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit aliquet odio sit amet scelerisque. Nulla eu tellus sed ipsum venenatis sollicitudin et quis ipsum. Vestibulum quis arcu sed ligula posuere molestie. Donec consectetur urna id massa scelerisque, nec congue sem scelerisque. Suspendisse tempor cursus elit eu congue. Sed congue nisl quis est placerat auctor a a ligula. Nam ullamcorper interdum odio. Donec ut enim risus. Sed eget molestie diam. Integer pellentesque tellus a porta commodo. Suspendisse laoreet auctor dui, ac vulputate nisl molestie nec.
                      <br />
                      <br />
                      Aenean sapien augue, congue ut rutrum in, ultricies vitae erat. Sed dictum egestas risus, ut sodales odio lobortis eget. Duis finibus iaculis tortor faucibus pretium. Praesent at risus ac sapien placerat cursus at ornare mi. Donec in lacinia elit. Curabitur nec erat ut arcu placerat ornare. Duis sagittis odio porttitor dui venenatis, et aliquam mauris tincidunt. Nam vel malesuada velit. Aliquam posuere condimentum quam, nec consequat nulla hendrerit a. Vestibulum dictum est ut rhoncus suscipit. Sed a semper velit, ut feugiat libero. Vestibulum aliquam suscipit quam, et varius ipsum maximus nec.
                      <br />
                      <br />
                      Fusce viverra convallis hendrerit. Nunc eget est sollicitudin, porta quam non, pellentesque ipsum. Curabitur nec faucibus nulla. Nullam consequat quam vitae posuere ullamcorper. Etiam in ullamcorper nulla, quis dignissim libero. Nunc interdum purus quis mattis varius. Etiam vel scelerisque erat. Morbi ante est, dignissim et nulla eget, hendrerit euismod neque. Cras dapibus quam in ante dignissim sodales. Duis lorem sapien, porttitor id purus et, venenatis dapibus odio. Morbi ac nunc id leo dictum rhoncus. Nullam nec dui eleifend erat egestas commodo.
                      <br />
                      <br />
                      Donec nec cursus metus, id dapibus tellus. Phasellus euismod eros eget orci sollicitudin laoreet. Duis non lorem accumsan, tempor massa eget, vestibulum ex. Nulla ultrices felis vitae purus tempus, in rutrum nisi cursus. Quisque convallis diam nisl. Curabitur quis nunc interdum, suscipit leo id, vehicula ante. Ut feugiat scelerisque massa, sed hendrerit urna. Etiam luctus, neque quis aliquam tincidunt, metus ipsum posuere justo, a cursus diam ipsum ut elit. Aenean arcu quam, finibus non tellus at, tempor consectetur magna. Sed id gravida quam. Fusce sed nisl sit amet ipsum sollicitudin malesuada sed non sem. Maecenas malesuada justo ac justo facilisis finibus. Sed sollicitudin urna urna, sit amet finibus elit commodo eget.
                      <br />
                      <br />
                      Pellentesque tristique placerat mauris, vitae pulvinar sapien commodo non. Praesent finibus mi ac accumsan pellentesque. Donec pellentesque sodales augue id blandit. Nunc nec mattis metus, eget euismod diam. Nullam lacinia dapibus commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam sit amet nisi ac nisl vestibulum tempus sit amet quis libero. Maecenas et enim ipsum. Pellentesque euismod sollicitudin finibus. Nulla odio leo, varius ut aliquet eget, gravida quis mi. Nunc scelerisque arcu in fringilla iaculis. Suspendisse finibus nisl ut lectus blandit ullamcorper. Nunc gravida diam et dictum venenatis. Morbi venenatis hendrerit dui a porttitor. 
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
