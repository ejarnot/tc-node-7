import "./App.css";
import { useState, useEffect } from "react";
import { getUsers } from "./utils/mock";

function App() {
  let [users, setUsers] = useState([]);

  async function fetchUsers() {
    let data = await getUsers();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        {users.map((u) => {
          return <h2 key={u.id}>{u.name}</h2>;
        })}
      </header>
    </div>
  );
}

export default App;
