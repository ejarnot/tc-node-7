import { useState, useEffect } from "react";
import User from "./User";

function Codewars(props) {
  let [user1, setUser1] = useState("");
  let [user2, setUser2] = useState("");
  let [loadUsers, setLoadUsers] = useState(false);

  function handleSearch(e) {
    e.preventDefault();

    setLoadUsers(!loadUsers);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="user1">User 1</label>
        <input
          type="text"
          name="user1"
          id="user1"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          required
          disabled={loadUsers}
        />
        <label htmlFor="user2">User 2</label>
        <input
          type="text"
          name="user2"
          id="user2"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          required
          disabled={loadUsers}
        />
        <button type="submit">{loadUsers ? "New Search" : "Compare"}</button>
      </form>
      <div>
        {loadUsers ? (
          <>
            <User username={user1} />
            <User username={user2} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Codewars;
