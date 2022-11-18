import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text],
    });
  }

  handleInput(event) {
    console.log("yay, they typed");
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Beginning With React</h1>
//         <p>What Time Is It?</p>
//         <p>It's Go Time</p>
//         <ul>Here's What We Need To Do:</ul>
//         <li>Eat React</li>
//         <li>Breathe React</li>
//         <li>Live React</li>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
