import http from "./httpService";

export function addCategory(data) {
  return http.post("/category/add/", data).then(({ data }) => data);
}

export function updateCategry(data, id) {
  return http.patch(`/category/update/${id}`, data).then(({ data }) => data);
}

export function removeCategory(id) {
  return http.delete(`/category/remove/${id}`, data).then(({ data }) => data);
}

export function getCategoryList() {
  return http.get("/category/list").then(({ data }) => data);
}

export function getOneCategory(id) {
  return http.post(`/category/${id}`, data).then(({ data }) => data);
}

