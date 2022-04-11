import { Component } from "react";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          content: "Practice React",
          priority: 1,
          date: "4-11-2022",
        },
      ],
      content: "",
      date: new Date().toISOString(),
      priority: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      list: [
        ...this.state.list,
        {
          content: this.state.content,
          date: this.state.date,
          priority: this.state.priority,
        },
      ],
      content: "",
      date: new Date().toISOString(),
      priority: 0,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newTask"
            id="newTask"
            placeholder="Sleep..."
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
          <input
            type="datetime-local"
            name="taskDate"
            id="taskDate"
            value={this.state.date}
            onChange={(event) => this.setState({ date: event.target.value })}
          />
          <select
            name="taskPriority"
            id="taskPriority"
            value={this.state.priority}
            onChange={(event) =>
              this.setState({ priority: event.target.value })
            }
          >
            <option value={0}>None</option>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.list.map((task, index) => {
            return <li key={`${task.date}${index}`}>{task.content}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
