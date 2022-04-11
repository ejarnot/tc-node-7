import { useState, useEffect } from "react";

function User({ username }) {
  let [user, setUser] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [username]);

  async function fetchUser() {
    try {
      let res = await fetch(
        `https://www.codewars.com/api/v1/users/${username}`
      );

      if (!res.ok) {
        throw new Error(`${username} does not exist.`);
      }

      let user = await res.json();

      setUser(user);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    } finally {
      setIsLoaded(true);
    }
  }

  if (isLoaded) {
    if (error) {
      return <span>{error}</span>;
    } else {
      return (
        <div>
          <h2>{user.username}</h2>
          <small>{user.ranks.overall.rank}</small>
          <small>{user.honor}</small>
          <small>{user.clan}</small>
        </div>
      );
    }
  } else {
    return <span>Loading...</span>;
  }
}

export default User;
