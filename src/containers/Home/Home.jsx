import React, { Component } from "react";
import "./Home.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Home extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleInputChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Welcome, ${this.state.firstName} ${this.state.lastName}! We have created your account with email address: ${this.state.email}`
    );
  };

  render() {
    return (
      <div className="container" id="home">
        <div className="row">
          <div className="col">
            <h1 className="text-center" id="heading">
              This is my homepage.{" "}
            </h1>
            <form>
              <Input
                name="firstName"
                value={this.state.firstName}
                handleInputChange={this.handleInputChange}
                type="text"
                label="First name"
              />
              <Input
                name="lastName"
                value={this.state.lastName}
                handleInputChange={this.handleInputChange}
                type="text"
                label="Last name"
              />
              <Input
                name="email"
                value={this.state.email}
                handleInputChange={this.handleInputChange}
                type="email"
                label="Email address"
              />
              <Input
                name="password"
                value={this.state.password}
                handleInputChange={this.handleInputChange}
                type="password"
                label="Password"
              />
              {/* <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </div> */}
              <div className="text-center">
                <Button
                  text="Create Account"
                  type="danger"
                  handleClick={this.handleSubmit}
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
