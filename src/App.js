import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [uuid, setUuid] = useState(uuidv4());

  const generateId = () => {
    setUuid(uuidv4());
  };
  return (
    <div className="App">
      <p>{uuid}</p>
      <button onClick={generateId}>Generator ID</button>
    </div>
  );
}

export default App;
