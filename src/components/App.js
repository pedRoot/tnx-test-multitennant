import useSelectTennant from "../hooks/useSelectTennant";
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

function App() {
  const allConfig = useSelectTennant();
  console.log('allConfig: ', allConfig);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
