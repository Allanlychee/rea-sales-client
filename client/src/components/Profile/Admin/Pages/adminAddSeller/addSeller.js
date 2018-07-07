import React, { Component } from "react";
import DeleteBtn from "../../../../DeleteBtn";
import Jumbotron from "../../../../Jumbotron";
import API from "../../Utils/adminAddSeller/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../../../Grid";
import { List, ListItem } from "../../../../List";
import { Input, TextArea, FormBtn } from "../../../../Form";
import Modal from "../../../../Modal";
import MyMapComponent from "../../../../Map";
import "./addSeller.css"



class AdminAddHome extends Component {
  state = {
    homes: [],
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    formatted_Addr: "",
    price: "",
    description: ""
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    API.getHomes()
      .then(res =>
        this.setState({ homes: res.data, name: "", address: "", city: "", state: "", zip: "", formatted_Addr: "", price: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteHome = id => {
    API.deleteHome(id)
      .then(res => this.loadHomes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.city) {
      API.saveHome({
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        formatted_Addr: this.state.address + " " + this.state.city + ", " + this.state.state + " " + this.state.zip,
        price: this.state.price,
        description: this.state.description
      })
        .then(res => this.loadHomes())
        .catch(err => console.log(err));
    }
  };
  
  
  
  render() {
    return (
      <div className="landing">
    <div className="landing-inner">
    <ul className="nav nav-tabs nav-fill adminNav">
      <li className="nav-item">
        <a className="nav-link adminNavlink" href="/Admin">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link adminNavlink" href="/Admin/View-Match">Match Clients</a>
      </li>
      <li className="nav-item">
        <a className="nav-link adminNavlink" href="/Admin/addhome">Homes for Sale</a>
      </li>
      <li className="nav-item">
        <a className="nav-link adminNavlink" href="#">View Buyers</a>
      </li>
      <li className="nav-item">
        <a className="nav-link adminNavlink" href="#">View Closed Deals</a>
      </li>
    </ul>
    </div>
      <Container fluid id="addHomeContainer">

        <Row>
          <Col size="md-6 sm-12">
            <Modal>
              <form>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                  placeholder="Address (required)"
                />
                <Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                  placeholder="City (required)"
                />
                <Input
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  name="state"
                  placeholder="State (required)"
                />
                <Input
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  name="zip"
                  placeholder="Zip (required)"
                />
                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  placeholder="Price (required)"
                />
                <TextArea
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="Description (Optional)"
                />
                <FormBtn
                  data-dismiss="modal"
                  className="btn btn-danger"
                >
                  Close
              </FormBtn>
                <FormBtn
                  disabled={!(this.state.address && this.state.city)}
                  onClick={this.handleFormSubmit}
                  className="btn btn-dark"
                >
                  Submit Home
              </FormBtn>
              </form>
            </Modal>
            <Jumbotron>
              <h1 id="homeLeads">Homes for Sale</h1>
            </Jumbotron>
            {this.state.homes.length ? (
              <List>
                {this.state.homes.map(Home => (
                  <ListItem key={Home._id}>
                    <Link to={"/Admin/addhome/" + Home._id}>
                      <strong id="homeLeadEntry">

                        Date Posted: {Home.date}
                        <br />
                        Name: {Home.name}
                        <br/>
                        Address: {Home.address} {Home.city}, {Home.state} {Home.zip}
                        <br />
                        Price: {Home.price}
                        <br />
                        Description: {Home.description}

                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteHome(Home._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3 className="text-center">No Results to Display</h3>
              )}
            <FormBtn
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#addHomeModal"
            >
              Add a Home
              </FormBtn>
          </Col>
          <Col size="md-6 sm-12">

            <MyMapComponent />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default AdminAddHome;