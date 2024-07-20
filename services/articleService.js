import http from "./httpService";

export function addArticle(data) {
  return http.post("/article/add", data).then(({ data }) => data);
}

export function updateArticle(data, id) {
  return http.patch(`/article/${id}`, data).then(({ data }) => data);
}

export function removeArticle(data, id) {
  return http.get(`/article/${id}`, data).then(({ data }) => data);
}

export function getArticleList(data) {
  return http.get(`/article/`, data).then(({ data }) => data);
}

export function getOneArticle(data, id) {
  return http.get(`/article/${id}`, data).then(({ data }) => data);
}
