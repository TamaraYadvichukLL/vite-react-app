import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useLocalStorage("is-open", false);

  const handleToggle = () => {
    setOpen(!isOpen);
    const test = "test";
    if (true) {
      console.log(test);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button onClick={handleToggle}>Toggle localStorage</button>
        {isOpen && <div>Open</div>}
      </div>
    </>
  );
}

export default App;
