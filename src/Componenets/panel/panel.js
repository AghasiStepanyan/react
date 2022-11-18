import React, { Component } from "react";
export default class Panel extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        panel users
        {this.props.users.map((item) => {
          return (
            <div>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.password}</li>
            </div>
          );
        })}
      </div>
    );
  }
}
