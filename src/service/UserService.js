import { apiWrapper } from "../helpers/api-wrapper";
import { configure } from "axios-hooks";
import axios from "../config/axios";
import LRU from "lru-cache";

const urlBase = `${process.env.REACT_APP_URL_API}users`;
const cache = new LRU({ max: 10 });
configure({ axios, cache });

const getAll = () => {
  return apiWrapper.get(`${urlBase}`);
}

const getById = id => {
  return apiWrapper.get(`${urlBase}/${id}`);
}

const create = (params) => {
  return apiWrapper.post(`${urlBase}, ${params}`);
}

const update = (id, params) => {
  return apiWrapper.post(`${urlBase}/${id}`, params);
}

const remove = id => {
  return apiWrapper.remove(`${urlBase}/${id}`);
}

const findUser = (users, value) => {
  return users.filter(user =>{
    const first_name = user.first_name;
    const last_name = user.last_name;

    const isFirstName = value.toUpperCase() === first_name.toUpperCase();
    const isLastName = value.toUpperCase() === last_name.toUpperCase();
    return (isFirstName || isLastName);
    }
  );
}

export const UserService = {
  getAll,
  getById,
  create,
  update,
  delete: remove,
  findUser
}