export const getDataAction = () => {
  return dispatch => {
    dispatch(fetchDataStarted())
  
    fetch('data.json')
      .then(data => data.json())
      .then(data => {
          dispatch(fetchDataSuccess(data))
        return data
      })
      .then(data => {
        const mentorDuplicates = data.map(item => item.mentor);
        const mentors = Array.from(new Set(mentorDuplicates))
        dispatch(getMentorsFromJSON(mentors))

        const taskDuplicates = data.map(item => Object.keys(item)).flat().filter(item => item !== 'mentor' && item !== 'student');
        const tasks = Array.from(new Set(taskDuplicates))
        dispatch(getTasksFromJSON(tasks))
      })
  }
}


const fetchDataStarted = () => ({type:'FETCH_DATA_STARTED'});

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

const getMentorsFromJSON = (data) => ({
  type: 'GET_MENTORS_FROM_JSON',
  payload: data
}) 

const getTasksFromJSON = (data) => ({
  type: 'GET_TASKS_FROM_JSON',
  payload: data
}) 
