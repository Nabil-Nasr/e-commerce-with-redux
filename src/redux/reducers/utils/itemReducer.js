// from get all request
const initialItemsState = {
  results: 0,
  paginationResult: {},
  itemsData: [],
};

// from create request
const initialItemState = {
  itemData: {}
};

const initialState = {
  ...initialItemsState,

  ...initialItemState,

  loading: false,
  error: null
};

export const itemReducer = ({ GET_ALL_ITEMS, GET_ITEM, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, ITEM_ENABLE_LOADING, ITEM_ERROR }) => (prevState = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      // this will affect the return value of the dispatch function in the action function (because the reducer invoked before the return)
      action.payload.itemsData = action.payload.data;
      delete action.payload.data;
      return {
        ...prevState,
        ...action.payload,
        loading: false,
        error: null
      };

    case GET_ITEM:
    case CREATE_ITEM:
    case UPDATE_ITEM:
      action.payload.itemData = action.payload.data;
      delete action.payload.data;
      return {
        ...prevState,
        ...action.payload,
        loading: false,
        error: null
      };

    case DELETE_ITEM:
      return {
        ...prevState,
        itemsData: prevState.itemsData.filter(item => item._id !== action.payload.id),
        loading: false,
        error: null
      };

    case ITEM_ENABLE_LOADING:
      return {
        ...prevState,
        paginationResult: {},
        loading: true
      };

    case ITEM_ERROR:
      return {
        ...prevState,
        loading: false,
        error: action.error,
      };

    default:
      return prevState;
  }
};