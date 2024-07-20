import http from "./httpService";

export function addToCart(id) {
  return http.post(`/cart/add/${id}`, data).then(({ data }) => data);
}

export function addToCartMulti(data, id) {
  return http.post(`/cart/add-multi/${id}`, data).then(({ data }) => data);
}

export function clearCart(data) {
  return http.delete(`/cart/clear`, data).then(({ data }) => data);
}

export function getCart() {
  return http.get(`/cart`).then(({ data }) => data);
}

export function removeFromCart(data, id) {
  return http.delete(`/cart/remove/${id}`, data).then(({ data }) => data);
}

export function removeFromCartMulti(data, id) {
  return http.delete(`/cart/remove-multi/${id}`, data).then(({ data }) => data);
}

export function addCouponToCart(data) {
  return http.post(`/cart/coupon`, data).then(({ data }) => data);
}
