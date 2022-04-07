import * as React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);

    console.log("Box - Constructor");
  }

  componentDidMount() {
    console.log("Box - Mount");
  }

  componentDidUpdate() {
    console.log("Box - Update");
  }

  componentWillUnmount() {
    console.log("Box - Unmount");
  }

  render() {
    console.log("Box - Render");
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: this.props.color,
          border: "1px solid black",
          display: "inline-block",
        }}
        onClick={(event) => this.props.onClick(event, this.props.id)}
        onDoubleClick={(event) => this.props.onDbClick(event, this.props.id)}
      >
        <span></span>
      </div>
    );
  }
}

export default Box;
