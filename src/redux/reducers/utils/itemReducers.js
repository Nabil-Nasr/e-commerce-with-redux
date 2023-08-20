export const allItemsReducer = ({ GET_ALL_ITEMS, ALL_ITEMS_ENABLE_LOADING, GET_ALL_ITEMS_ERROR }) => (prevState = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      action.payload.loading = false;
      return action.payload;

    case ALL_ITEMS_ENABLE_LOADING:
      return {
        data:[],
        loading: true
      };

    case GET_ALL_ITEMS_ERROR:
      return {
        loading: false,
        error: action.error,
        data: []
      };

    default:
      return prevState;
  }

};


export const itemReducer = ({ CREATE_ITEM, ITEM_ENABLE_LOADING, CREATE_ITEM_ERROR }) => (prevState = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      action.payload.loading = false;
      return action.payload;

    case ITEM_ENABLE_LOADING:
      return {
        loading: true
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