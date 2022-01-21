export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});


//get
export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (lists) => ({
  type: "GET_USERS_SUCCESS",
  payload: lists,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

//delete
export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
  type: "DELETE_USER_SUCCESS",
  payload: id,
});

export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});