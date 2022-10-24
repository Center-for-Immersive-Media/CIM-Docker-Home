import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Center for Immersive Media Internal Resources</h1>
        <p>An internal listing of resources</p>
        <div className="lists">
          <ul>
            <h3>Services</h3>
            <li>
              <a href="http://j125-cim-w04:8000/wp-login.php" target={"_blank"}>
                Wordpress (Port:8000)
              </a>
            </li>
            <li>
              <a href="http://j125-cim-w04:2000/" target={"_blank"}>
                Appwrite (Port:2000)
              </a>
            </li>
          </ul>
          <ul>
            <h3>AR Demos</h3>
            <li>
              <a href="8th.io/nrtz6" target={"_blank"}>
                MoCap Dancer (External)
              </a>
            </li>
            <li>
              <a href="8th.io/7a4xw" target={"_blank"}>
                Postcard (External)
              </a>
            </li>
          </ul>
          <ul>
            <h3>VR Films</h3>
            <li>
              <a
                href="https://www.oculus.com/experiences/quest/5334662579895130"
                target={"_blank"}
              >
                On the morning you wake.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
