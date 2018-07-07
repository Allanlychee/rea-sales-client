import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../../../Grid";
import Jumbotron from "../../../../Jumbotron/Jumbotron"
import API from "../../Utils/adminAddSeller/API"
import "./Detail.css"

class Detail extends Component {
  state = {
    home: {}
  };
  // When this component mounts, grab the home with the _id of this.props.match.params.id
  // e.g. localhost:3000/admin/addHome/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getHome(this.props.match.params.id)
      .then(res => this.setState({ home: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 id="DetailAddress">
                {this.state.home.address} {this.state.home.city}, {this.state.home.state} {this.state.home.zip}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          
              Description
              <p>
                {this.state.home.description}
                <br/>
                {this.state.home.price}
              </p>
            
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/admin/addHome">← Back to Add Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
