import http from "./httpService";

export function createHero(data) {
  return http.post("/hero/add", data).then(({ data }) => data);
}

export function updateHero(data, id) {
  return http.patch(`/hero/update/${id}`, data).then(({ data }) => data);
}

export function deleteHero(id) {
  return http.delete(`/hero/delete/${id}`, data).then(({ data }) => data);
}

export function getHeroes() {
  return http.get("/hero").then(({ data }) => data);
}

export function getHero(id) {
  return http.get(`/hero/${id}`, data).then(({ data }) => data);
}
