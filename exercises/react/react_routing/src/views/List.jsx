import { useState, useEffect } from "react";
import { apiService, GHIBLI_BASE_URL } from "../utils/apiService";

function List({ path, title }) {
  let [list, setList] = useState([]);

  async function fetchList() {
    let data = await apiService(GHIBLI_BASE_URL + path);
    setList(data);
  }

  useEffect(() => {
    fetchList();
  }, [path]);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name || item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
