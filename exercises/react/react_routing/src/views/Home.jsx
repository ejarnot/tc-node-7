import { useState, useEffect } from "react";

function Home(props) {
  let [test, setTest] = useState("")

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_HOST + "/api/v1/hello")
    .then((res) => res.text())
    .then((msg) => setTest(msg))
    .catch((e) => console.error(e))
  }, [])
  
  if (!test) return (
    <div>
      <h1>App not connecting to the server :(</h1>
    </div>
  )

  return (
    <div>
      <h1>Hello {test}</h1>
    </div>
  );
}


export default Home;