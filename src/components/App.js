import { useConfigContext } from "../context/configContext";
import logo from '../assets/img/logo.svg';
import SelectTennant from "./globals/SelectTennant";

function App() {
  const { configToTennant } = useConfigContext();
  import(`../assets/${configToTennant.tennantActive}/css/index.scss`);
  import(`../assets/${configToTennant.tennantActive}/css/App.scss`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {configToTennant.title}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          process.env.NODE_ENV === 'development' && <SelectTennant />
        }        
      </header>
    </div>
  );
}

export default App;
