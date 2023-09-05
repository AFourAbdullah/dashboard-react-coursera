export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/2").then((res) => res.json());
};
