import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
        }
      })
      .then(() => (this.name.value = ""))
      .catch(er => console.log(er));
  };

  render() {
    return (
      <div>
        <div className="input-field col s6">
          <input type="text" ref={input => (this.name = input)} />
          <label>To do something</label>
        </div>

        <button
          onClick={this.submitForm}
          className="waves-effect waves-light btn"
        >
          Send
        </button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm);
