import logo from './logo.svg';
import './App.css';
import Development from "./development";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Development/>
      </header>
    </div>
  );
}

export default App;
