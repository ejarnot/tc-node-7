import { Component } from "react";

export class Button extends Component {
  render() {
    let props = this.props;

    return (
      <button onClick={props.onClick} className={`btn btn-${props.type}`}>
        {props.children}
      </button>
    );
  }
}
