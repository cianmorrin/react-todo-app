import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <div>
        <p> {this.props.todo.title} </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propType = {
  todo: PropTypes.array.isRequired,
};

export default TodoItem;
