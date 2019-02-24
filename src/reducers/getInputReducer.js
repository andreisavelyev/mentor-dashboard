const initialState = {
  mentorsFiltered: [],
}

export const getInputReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'GET_INPUT':
      return {
        ...state,
        mentorsFiltered: action.payload
      }
    case 'RESET_INPUT':
      return initialState;
    default:
      return state
  }
}