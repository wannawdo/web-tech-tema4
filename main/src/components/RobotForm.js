import React, { Component } from "react";

class RobotForm extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      name: "",
      mass: 0
    };

    this.handleChange = evt => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    };
  }

  render() {
    return (
      <div>
        <input type="text" name="type" id="type" onChange={this.handleChange} />
        <input type="text" name="name" id="name" onChange={this.handleChange} />
        <input
          type="number"
          name="mass"
          id="mass"
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="add"
          onClick={() =>
            this.props.onAdd({
              name: this.state.name,
              type: this.state.type,
              mass: this.state.mass
            })
          }
        />
      </div>
    );
  }
}

export default RobotForm;