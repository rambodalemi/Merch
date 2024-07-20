import http from "./httpService";

export function addToCart(id) {
  return http.post(`/wishlist/${id}`, data).then(({ data }) => data);
}

export function removeFromWishlist(id) {
  return http.delete(`/wishlist/${id}`, data).then(({ data }) => data);
}

export function getWishlist(data) {
  return http.get(`/wishlist`, data).then(({ data }) => data);
}

