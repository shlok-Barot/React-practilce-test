export const addUser = (user) => ({ type: "ADD_USER", payload: user });

export const editUser = (id, updatedInfo) => ({
  type: "EDIT_USER",
  payload: { id, updatedInfo },
});

export const removeUser = (id) => ({ type: "REMOVE_USER", payload: id });

export const removeAllUsers = () => ({ type: "REMOVE_ALL_USERS" });

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromcart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItem = (productId, quantity) => ({
  type: "UPDATE_CART_ITEM",
  payload: (productId, quantity),
});

export const loadProducts = (product) => ({
  type: "LOAD_PRODUCTS",
  payload: product,
});
