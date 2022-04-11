import { useState } from "react";

function Tasks(props) {
  let [list, setList] = useState([
    {
      content: "Practice React",
      priority: 1,
      date: "4-11-2022",
    },
  ]);
  let [content, setContent] = useState("");
  let [date, setDate] = useState(new Date().toISOString());
  let [priority, setPriority] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    setList([
      ...list,
      {
        content,
        date,
        priority,
      },
    ]);
    setContent("");
    setDate(new Date().toISOString());
    setPriority(0);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          placeholder="Sleep..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <input
          type="datetime-local"
          name="taskDate"
          id="taskDate"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <select
          name="taskPriority"
          id="taskPriority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value={0}>None</option>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {list.map((task, index) => {
          return <li key={`${task.date}${index}`}>{task.content}</li>;
        })}
      </ul>
    </div>
  );
}

export default Tasks;
