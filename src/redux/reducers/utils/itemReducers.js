export const allItemsReducer = ({ GET_ALL_ITEMS, ALL_ITEMS_ENABLE_LOADING, GET_ALL_ITEMS_ERROR }) => (prevState = { loading: true, data: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...action.payload,
        loading: false
      };
    case ALL_ITEMS_ENABLE_LOADING:
      return {
        ...prevState,
        loading: true,
      };
    case GET_ALL_ITEMS_ERROR:
      return {
        ...prevState,
        loading: true,
        error: action.error,
      };
    default:
      return prevState;
  }
};


export const itemReducer = ({ CREATE_ITEM, ITEM_ENABLE_LOADING, CREATE_ITEM_ERROR }) => (prevState = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...action.payload,
        loading: false
      };
    case ITEM_ENABLE_LOADING:
      return {
        loading: true,
      };
    case CREATE_ITEM_ERROR:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return prevState;
  }
};