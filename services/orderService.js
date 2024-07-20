import http from "./httpService";

export function createStripeOrder() {
  return http.post(`/order/stripe/`).then(({ data }) => data);
}

export function createZibalOrder() {
  return http.post(`/order/zibal}`).then(({ data }) => data);
}

export function getOrder(id) {
  return http.patch(`/order/${id}`, id).then(({ data }) => data);
}

export function getOrders() {
  return http.get(`/order/`).then(({ data }) => data);
}

export function userOrders() {
  return http.get(`/order/user/`).then(({ data }) => data);
}

export function updateOrder(id) {
  return http.get(`/order/${id}`, id).then(({ data }) => data);
}

export function getInvoice(orderid) {
  return http.get(`/order/invoice/${orderid}`, id).then(({ data }) => data);
}


