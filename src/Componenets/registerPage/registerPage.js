import React, { Component } from "react";
import Input from "../input/input";
import Panel from "../panel/panel";
import TitleRegister from "../titleGroup/titleRegister";
export default class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    users: [],
    errors: "",
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleClick = (value) => {
    switch (true) {
      case this.state.name === "":
        this.setState({
          errors: "errors for name",
        });
        break;
      case this.state.email === "":
        this.setState({
          errors: "errors for email",
        });
      // eslint-disable-next-line no-fallthrough
      default:
        this.setState({
          errors: "success",
        });
        break;
    }
    if (this.state.name && this.state.email && this.state.password) {
      let user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      // const userState = [...this.state.users];

      const newUser = [...this.state.users, user];
      console.log(newUser, "newUser");

      this.setState({
        users: newUser,
      });
    } else {
      alert("else");
    }
  };

  render() {
    console.log(this.state.errors, "this.state.errors errors");

    return (
      <div className="form">
        <TitleRegister />
        <Input
          handleName={this.handleName}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          handleClick={this.handleClick}
        />
        <p style={{ color: "red" }}>{this.state.errors}</p>
        <Panel users={this.state.users} />
      </div>
    );
  }
}
