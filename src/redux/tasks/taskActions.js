/* eslint-disable comma-dangle */
import { GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_ERROR } from './taskTypes';

const getTasks = () => async (dispatch) => {
  dispatch({
    type: GET_TASKS,
  });

  try {
    const response = await fetch(
      'https://piscine-mandarine-71814.herokuapp.com/api/tasks/'
    );
    const data = await response.json();

    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_ERROR,
      payload: 'Ocurrió un error :(',
    });
  }
};

export { getTasks };
