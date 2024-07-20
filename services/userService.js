import http from "./httpService";

export function updateProfile(id, data) {
  return http.post(`/user/${id}`, data, id).then(({ data }) => data);
}

export function deleteUser(id) {
  return http.delete(`/user/${id}`, id).then(({ data }) => data);
}

export function getUser(id) {
  return http.get(`/user/${id}`, id).then(({ data }) => data);
}

export function getUsers() {
  return http.get(`/user/`).then(({ data }) => data);
}

