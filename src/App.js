import { toast } from "sonner";
import "./App.css";
import JobList from "./components/JobList";

function App() {
  return (
    <div>
      <JobList />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </div>
  );
}

export default App;