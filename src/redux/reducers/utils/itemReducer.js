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

export const itemReducer = ({ GET_ALL_ITEMS, CREATE_ITEM, ITEM_ENABLE_LOADING, ITEM_ERROR }) => (prevState = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      action.payload.itemsData = action.payload.data;
      delete action.payload.data;
      return {
        ...prevState,
        ...action.payload,
        loading: false,
        error: null
      };

    case CREATE_ITEM:
      return {
        ...prevState,
        itemData: action.payload.data,
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