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
            <li>
              <a
                href="https://www.oculus.com/experiences/quest/2121787737926354"
                target={"_blank"}
              >
                Traveling While Black.
              </a>
            </li>
            <li>
              <a
                href="https://www.oculus.com/experiences/quest/1946326588770583"
                target={"_blank"}
              >
                Notes on Blindness (Quest 2)
              </a>
            </li>
            <li>
              <a
                href="https://www.oculus.com/experiences/rift/1671004309616863"
                target={"_blank"}
              >
                Notes on Blindness (Rift)
              </a>
            </li>
            <li>
              <a
                href="https://www.oculus.com/experiences/quest/3006696236087408"
                target={"_blank"}
              >
                Space Explorers (Quest 2)
              </a>
            </li>
            <li>
              <a
                href="https://www.oculus.com/experiences/rift/4109168145824350"
                target={"_blank"}
              >
                Space Explorers (Rift)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=NbsMD-nzTdI"
                target={"_blank"}
              >
                Ashe '68
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
