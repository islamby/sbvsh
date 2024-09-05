const ADD_TASK = 'tasks/add';
const DELETE_TASK = 'tasks/delete';
const EDIT_TASK = 'tasks/edit';
const TOGGLE_IMPORTANT = 'tasks/toggleImportant';
const SET_FILTER = 'filter/set';

export const addTask = (text) => ({ type: ADD_TASK, text });
export const deleteTask = (index) => ({ type: DELETE_TASK, index });
export const editTask = (index, newText) => ({ type: EDIT_TASK, index, newText });
export const toggleImportant = (index) => ({ type: TOGGLE_IMPORTANT, index });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });

const initialState = {
  tasks: [],
  filter: 'All'
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, { text: action.text, important: false, completed: false }] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.index) };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, text: action.newText } : task
        )
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, important: !task.important } : task
        )
      };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
