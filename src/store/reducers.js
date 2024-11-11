const initialUserState = [];

const initialProductState = [
  {
    id: 1,
    name: "Product A",
  },
  {
    id: 2,
    name: "Product B",
  },
];

const initialCartState = { item: [] };

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.userId
          ? { ...user, ...action.payload.updatedInfo }
          : user
      );
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);

    case "REMOVE_ALL_USERS":
      return [];

    default:
      return state;
  }
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT":
      return action.payload;

    default:
      return state;
  }
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.item.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          item: state.item.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.item, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        item: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_CART_ITEM":
      return {
        ...state,
        item: state.items.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};
