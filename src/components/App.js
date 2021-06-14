import { Switch, Route, Link } from "react-router-dom";

import { useConfigContext } from "../context/configContext";
import Add from "./users/Add";
import Show from "./users/Show";
import List from "./users/List";

function App() {

  const { configToTennant } = useConfigContext();

  import(`../assets/${configToTennant.tennantActive}/css/index.scss`);
  import(`../assets/${configToTennant.tennantActive}/css/App.scss`);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/list">
          Novo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/list"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/","/users"]} component={List} />
          <Route path="/add" component={Add} />
          <Route path="/list" component={List} />
          <Route path="/users/:id" component={Show} />
        </Switch>
      </div>
    </div>  
  );
}

export default App;
