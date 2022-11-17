import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Beginning With React</h1>
        <p>What Time Is It?</p>
        <p>It's Go Time</p>
        <ul>Here's What We Need To Do:</ul>
        <li>Eat React</li>
        <li>Breathe React</li>
        <li>Live React</li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
