import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-type": "application/json"
  }
});

export default axios;

