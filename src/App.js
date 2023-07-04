import { useEffect, useState } from "react";
import useFetch from "./Fetch";
import Homepage from "./Homepage";
import Axios from "axios";
import axios from "axios";

function App(props) {
  const [info, setinfo] = useState("");
  const {
    data: projects,
    setData,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/projects");


  return (
    <div className="App">
      <div className="content">
        <Homepage
          projects={projects}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
