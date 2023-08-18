export const allItemsReducer = ({ GET_ALL_ITEMS, ALL_ITEMS_ENABLE_LOADING, GET_ALL_ITEMS_ERROR }) => (prevState = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      action.payload.loading = false;
      return action.payload;

    case ALL_ITEMS_ENABLE_LOADING:
      prevState.loading = true;
      delete prevState.error
      break;

    case GET_ALL_ITEMS_ERROR:
      prevState.loading = false;
      prevState.error = action.error;
      break;

    default:
  }

  return prevState;
};


export const itemReducer = ({ CREATE_ITEM, ITEM_ENABLE_LOADING, CREATE_ITEM_ERROR }) => (prevState = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      action.payload.loading = false;
      return action.payload;

    case ITEM_ENABLE_LOADING:
      prevState.loading = true;
      delete prevState.error
      break;

    case CREATE_ITEM_ERROR:
      prevState.loading = false;
      prevState.error = action.error;
      break;

    default:
  }

  return prevState;
};