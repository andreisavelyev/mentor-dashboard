const inititalState = {
  isLoaded: false,
  data: [],
  mentors: [],
  tasks: []
}

export const getDataReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_STARTED':
      return {
        ...state,
        };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        isLoaded: true,
        data: action.payload
      } 
     case 'GET_MENTORS_FROM_JSON':
     return {
       ...state,
      mentors: action.payload
     } 
     case 'GET_TASKS_FROM_JSON':
     return {
       ...state,
      tasks: action.payload
     }  
    default:
      return state;
  }
};