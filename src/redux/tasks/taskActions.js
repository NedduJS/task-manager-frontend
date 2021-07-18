/* eslint-disable comma-dangle */
import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  POST_TASK_SUCCESS,
  CHANGE_DISPLAY_FORM,
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

const editTask = (editedTask) => async (dispatch) => {
  try {
    const response = await fetch(`${URL}${editedTask.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedTask),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_TASKS_ERROR,
      payload: 'Ocurrió un error :(',
    });
  }
};

const changeDisplayForm = (newDisplay) => (dispatch) => {
  dispatch({
    type: CHANGE_DISPLAY_FORM,
    payload: newDisplay,
  });
};

export { getTasks, postTask, editTask, changeDisplayForm };
