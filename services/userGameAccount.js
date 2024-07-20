import http from "./httpService";

export function addNewAccount(data) {
  return http.post(`/game-account/add/`, data).then(({ data }) => data);
}

export function updateAccount(id) {
  return http.post(`/game-account/${id}`, id).then(({ data }) => data);
}

export function removeAccount(id) {
  return http.delete(`/game-account/${id}`, id).then(({ data }) => data);
}

export function getUserAccount(id) {
  return http.get(`/game-account/${id}`, id).then(({ data }) => data);
}

export function getUserAccounts(id) {
  return http.get(`/game-account/list/${id}`, id).then(({ data }) => data);
}