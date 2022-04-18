import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Back to homepage</Link>
      </header>
    </div>
  );
}

export default App;
