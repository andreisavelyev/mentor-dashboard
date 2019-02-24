const initialState = {
  isLoggedIn: false,
}

export const authReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'GET_AUTHORIZATION':
      return {
        ...state,
        isLoggedIn: action.payload
      }
    default:
      return state
  }
} 