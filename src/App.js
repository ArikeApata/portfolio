import Homepage from "./Components/Homepage";
import projects from "./data/db.json";

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
      <div className="content">
        <Homepage
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
