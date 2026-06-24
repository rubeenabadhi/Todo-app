import React from "react";

function FilterTabs({ filter, setFilter, onClearAll, onClearCompleted }) {
  return (
    <div className="filter-wrapper">
      <div className='filter-tabs'>
        {['All', 'Completed', 'Active'].map((type) => (
          <button 
            key={type}
            className={filter === type ? 'active' : ''}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      
      {/* Quick Action Utilities */}
      <div className="bulk-actions">
        <button onClick={onClearCompleted} className="action-link">Clear Completed</button>
        <button onClick={onClearAll} className="action-link delete-all">Clear All</button>
      </div>
    </div>
  );
}
export default FilterTabs;