import { apiWrapper } from "../helpers/api-wrapper";
import { configure } from "axios-hooks";
import axios from "../config/axios";
import LRU from "lru-cache";

const urlBase = `${process.env.REACT_APP_URL_API}users`;
const cache = new LRU({ max: 10 });
configure({ axios, cache });

const getAll = () => {
  return  apiWrapper.get(`${urlBase}`);
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

export const UserService = {
  getAll,
  getById,
  create,
  update,
  delete: remove
}