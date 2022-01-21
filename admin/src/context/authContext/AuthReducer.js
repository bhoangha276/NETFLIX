const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      case "GET_USERS_START":
        return {
          lists: [],
          isFetching: true,
          error: false,
        };
      case "GET_USERS_SUCCESS":
        return {
          lists: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_USERS_FAILURE":
        return {
          lists: [],
          isFetching: false,
          error: true,
        };
      case "DELETE_LIST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_LIST_SUCCESS":
        return {
          lists: state.lists.filter((list) => list._id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_LIST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default AuthReducer;