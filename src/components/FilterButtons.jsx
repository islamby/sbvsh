import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/reducer';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button
        className={currentFilter === 'All' ? 'active' : ''}
        onClick={() => handleFilterChange('All')}
      >
        All
      </button>
      <button
        className={currentFilter === 'Active' ? 'active' : ''}
        onClick={() => handleFilterChange('Active')}
      >
        Active
      </button>
      <button
        className={currentFilter === 'Completed' ? 'active' : ''}
        onClick={() => handleFilterChange('Completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
