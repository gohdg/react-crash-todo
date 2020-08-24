import React, { Component } from "react";
// import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  // 내부 정의 함수를 사용할 경우 bind를 해야 하는데.. arrow function을 쓰면 안해도 된다

  render() {
    const { id, title } = this.props.todo;
    const { markComplete } = this.props;
    //console.log(markComplete);
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={() => {
              markComplete(id);
            }}
          />{" "}
          {title}
          <button onClick={() => this.props.delTodo(id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
// };
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodoItem;
