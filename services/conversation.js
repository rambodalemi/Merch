import http from "./httpService";

export function createConversation(data) {
  return http.post(`/conversation/start/`, data).then(({ data }) => data);
}

export function updateConversation(id) {
  return http.post(`/conversation/${id}`, id).then(({ data }) => data);
}

export function removeConversation(id) {
  return http.delete(`/conversation/${id}`, id).then(({ data }) => data);
}

export function getConversation(id) {
  return http.get(`/conversation/${id}`, id).then(({ data }) => data);
}

export function getConversations() {
  return http.get(`/conversation/` ).then(({ data }) => data);
}

export function emailConversation(id) {
  return http.get(`/conversation/email/${id}` ).then(({ data }) => data);
}