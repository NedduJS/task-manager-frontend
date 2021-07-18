/* eslint-disable comma-dangle */
import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  POST_TASK_SUCCESS,
} from './taskTypes';

const URL = 'https://piscine-mandarine-71814.herokuapp.com/api/tasks/';

const getTasks = () => async (dispatch) => {
  dispatch({
    type: GET_TASKS,
  });

  try {
    const response = await fetch(URL);
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

const postTask = (newTask) => async (dispatch) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();

    dispatch({
      type: POST_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_ERROR,
      payload: 'Ocurrió un error :(',
    });
  }
};

export { getTasks, postTask };
