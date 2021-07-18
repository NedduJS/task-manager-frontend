import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  CHANGE_DISPLAY_FORM,
} from './taskTypes';

const initialState = {
  task: undefined,
  fetching: false,
  error: false,
  newtaskForm: 'displayNone',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, fetching: true };
    case GET_TASKS_SUCCESS:
      return { ...state, fetching: false, task: action.payload };
    case GET_TASKS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case CHANGE_DISPLAY_FORM:
      return { ...state, newtaskForm: action.payload };
    default:
      return state;
  }
};

export default reducer;
