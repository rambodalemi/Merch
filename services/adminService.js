import http from "./httpService";

export function addAdmin(data, id) {
  return http.post(`/admin/add/${id}`, data).then(({ data }) => data);
}

export function removeAdmin(data, id) {
  return http.delete(`/admin/remove/${id}`, data).then(({ data }) => data);
}

export function getOneAdminList(id) {
  return http.get(`/admin/${id}`, data).then(({ data }) => data);
}

export function getAllAdminsList() {
  return http.get("/admin/list").then(({ data }) => data);
}
