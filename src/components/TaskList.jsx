import React from "react";
import TaskItem from "./TaskItem";
function TaskList({filteredTasks=[],handleToggleComplete,handleDeleteTask}){
    return(
     <ul className="task-list">
        {filteredTasks.length===0 ?(
        <p className="empty-state">No task found</p>
        ):(
            filteredTasks.map((task)=>(
                <TaskItem
                key={task.id}
                task={task}
                handleToggleComplete={handleToggleComplete}
                handleDeleteTask={handleDeleteTask}
                />

            ))
        )
    }
     </ul>   
    );
}
export default TaskList