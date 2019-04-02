import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Goal extends Component {
  toggleGoal = () => {
    if (Meteor.userId()) {
      this.props.toggleGoal({
        variables: {
          id: this.props.goal._id
        }
      });
    } else {
      throw new Error("not autorization");
    }
  };

  render() {
    return (
      <li>
        <input
          type="checkbox"
          className="indeterminate-checkbox"
          id={this.props.goal._id}
          onChange={this.toggleGoal}
          checked={this.props.goal.completed}
        />
        <label htmlFor={this.props.goal._id}>
          <span className="blue-text">{this.props.goal.name}</span>
        </label>
      </li>
    );
  }
}

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

export default graphql(toggleGoal, {
  name: "toggleGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);
