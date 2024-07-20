import http from "./httpService";

export function addNewContact(data) {
  return http.post(`/upload/product-image/`, data).then(({ data }) => data);
}

export function removeAdmin(data) {
  return http.delete(`/upload/profile-image`, data).then(({ data }) => data);
}

export function removeContact(data) {
  return http.delete(`/upload/product-gallery`, data).then(({ data }) => data);
}
