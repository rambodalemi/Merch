import http from "./httpService";

export function addNewCode(data) {
  return http.post(`/code-game/add/`, data).then(({ data }) => data);
}

export function updateCode(id) {
  return http.post(`/code-game/${id}`, id).then(({ data }) => data);
}

export function removeCode(id) {
  return http.post(`/code-game/${id}`, id).then(({ data }) => data);
}

export function getCode(id) {
  return http.post(`/code-game/${id}`, data).then(({ data }) => data);
}

export function getCodes() {
  return http.post(`/code-game/list/` ).then(({ data }) => data);
}