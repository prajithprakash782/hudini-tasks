import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Container>
      <div className="text-center">
        <h1>TODO LIST</h1>

        <div className="bottom mt-3">
          <Tasks />
        </div>
      </div>
    </Container>
  );
}

export default App;
