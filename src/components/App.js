import { useState, useEffect } from "react";
import { UserService } from "../service/UserService";
import SelectTennant from "./globals/SelectTennant";
import { useConfigContext } from "../context/configContext";

import logo from '../assets/img/logo.svg';

function App() {
  const [users, setUsers] = useState([])
  const { configToTennant } = useConfigContext();

  import(`../assets/${configToTennant.tennantActive}/css/index.scss`);
  import(`../assets/${configToTennant.tennantActive}/css/App.scss`);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = () => {
    UserService.getAll()
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(
        error => console.log(error)
      );
  }

  return (
    <div className="App App-header">
      <div>
        <div className="row">
          <div className="col-md-4">
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
          </div>
          <div className="col-md-8 mt4">
            <pre>
              <code>
                {
                  users && users.map((user, i) => (
                    <li
                      className="list-group-item "
                      key={i}
                    >
                      {user.email}
                    </li>
                  ))
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
