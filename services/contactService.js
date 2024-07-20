import http from "./httpService";

export function addNewContact(data, id) {
  return http.post(`/contact/add/`, data).then(({ data }) => data);
}

export function removeAdmin(data, id) {
  return http.delete(`/contact/${id}`, id).then(({ data }) => data);
}

export function removeContact(id) {
  return http.delete(`/contact/${id}`, id).then(({ data }) => data);
}

export function getOneContact() {
  return http.get("/contact/list").then(({ data }) => data);
}

export function getAllContacts() {
  return http.get("/contact/").then(({ data }) => data);
}

export function responseToContact(data, id) {
  return http.post(`/contact/response/${id}`, data. id).then(({ data }) => data);
}
