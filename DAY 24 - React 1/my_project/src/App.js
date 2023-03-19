import logo from './logo.svg';
import './App.css';

function App() {
  const text = "haduh"
  const num = 10
  const skill = ["html", "css", "js"]
  const data = [
    {
      name : "react",
      creator : "meta"
    },
    {
      name : "Angular",
      creator : "Google"
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {text + " " + num}</p>

        <li>
          {skill.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
        </li>

        
        <ol>
          {data.map((value, index)=>(
          <li key={index}>{value.name + " is created by: " + value.creator}</li>
          ))}
        </ol>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
