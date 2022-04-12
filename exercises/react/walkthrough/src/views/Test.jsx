import { useNavigate, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Test = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  return (
    <Layout>
      <div>
        <button onClick={() => navigate(`somewhere-cool&check-this-out`)}>
          Take me somewhere cool
        </button>
        <p>location.pathname: {location.pathname}</p>
        <p>params.value: {params.value}</p>
      </div>
    </Layout>
  );
};

export default Test;
