import Blog from "./Components/Blog";
import Homepage from "./Components/Homepage";
import Subscribe from "./Components/subscribe";
import projects from "./data/db.json";

import { Route, Routes } from "react-router";

function App() {
  // const [info, setinfo] = useState("");
  // const {
  //   data: projects,
  //   setData,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8000/projects");

  //console.log("data", jsonData)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage projects={projects} />} exact />
        <Route path="/subscribe" element={<Subscribe/> } />

        <Route path="/blog" element={<Blog/> } />
      </Routes>
    </div>
  );
}

export default App;
