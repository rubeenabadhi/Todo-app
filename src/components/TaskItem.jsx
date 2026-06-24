import React from "react";
import { MdDelete } from "react-icons/md";
function TaskItem({
  task,
  handleToggleComplete,
  handleDeleteTask,
}) {
  return (
    <li
      className={`task-item ${
        task.completed ? "completed" : ""
      }`}
    >
      <div
        className="task-text-container"
        onClick={() => handleToggleComplete(task.id)}
      >
        <span className="checkbox"></span>
        <span className="task-text">
          {task.text}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => handleDeleteTask(task.id)}
      >
        <MdDelete/>
      </button>
    </li>
  );
}

export default TaskItem;