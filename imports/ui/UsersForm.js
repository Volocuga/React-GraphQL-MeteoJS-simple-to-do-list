import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import NavigationBar from "./NavigationBar";

export default class UsersForm extends Component {
  render() {
    const { user, client } = this.props;
    if (user._id) {
      return (
        <div>
          <NavigationBar client={client} />
        </div>
      );
    }

    return (
      <div>
        <LoginForm client={client} />
        <RegisterForm client={client} />
      </div>
    );
  }
}
