import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleImportant } from '../redux/reducer';

const TodoList = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const handleToggleImportant = (index) => {
    dispatch(toggleImportant(index));
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText) {
      dispatch(editTask(index, newText));
    }
  };

  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index} className={task.important ? 'important' : ''}>
          <span>{task.text}</span>
          <input
            type="checkbox"
            className={`important-checkbox ${task.important ? 'checked' : ''}`}
            onChange={() => handleToggleImportant(index)}
            checked={task.important}
          />
          <button onClick={() => handleDelete(index)}>x</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
