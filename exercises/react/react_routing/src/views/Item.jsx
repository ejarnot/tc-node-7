import { useState, useEffect } from "react";
import { apiService, GHIBLI_BASE_URL } from "../utils/apiService";
import { stripTopic } from "../utils/formatting";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function Item({ values: { displayProperties } }) {
  let [item, setItem] = useState(null);
  let [hasLoaded, setHasLoaded] = useState(false);

  let navigate = useNavigate();
  let { id } = useParams();
  let { pathname } = useLocation();

  async function fetchItem() {
    let data = await apiService(
      GHIBLI_BASE_URL + `${stripTopic(pathname)}/${id}`
    );
    setItem(data);
    setHasLoaded(true);
  }

  useEffect(() => {
    fetchItem();
  }, [id]);

  if (hasLoaded) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>{item.name || item.title}</h1>
        <table>
          <tbody>
            {displayProperties.map((prop) => {
              return (
                <tr key={prop}>
                  <td>{prop}</td>
                  <td>{item[prop]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <span>Loading...</span>;
  }
}

export default Item;
