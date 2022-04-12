import { useState, useEffect } from "react";
import { apiService, GHIBLI_BASE_URL } from "../utils/apiService";
import { Link } from "react-router-dom";
import { urlSafe } from "../utils/formatting";

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
      <h1>
        {title} {list.length}
      </h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${urlSafe(item.id)}`}>
                {item.name || item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
