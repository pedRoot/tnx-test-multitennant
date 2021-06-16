import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserService } from "../../service/UserService";

const List = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    UserService.getAll()
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(
        error => console.log(error)
      );
  }
  const onChangeSearch = e => {
    const textSearch = e.target.value;
    setSearch(textSearch);
  }

  const searchUser = () => {
    const result = UserService.findUser(users, search);
    setUsers(result);
  }

  return (
    <div className="m-t-md">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search user"
              value={search}
              onChange={onChangeSearch}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={searchUser}
              >
                Search
              </button>

            </div>
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={getAllUsers}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
      <dir className="row">
        {
          users && users.map((user, i) =>
          (
            <div className="col mb-4" key={i}>
              <div className="card">
                <img src={user.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
                <div className="card-footer">
                  <Link
                    to={"/users/" + user.id}
                    className="btn btn-outline-danger"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          )
          )
        }
      </dir>
    </div>
  )
}

export default List
