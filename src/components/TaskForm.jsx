import React from "react";

function TaskForm({taskInput,setTaskInput,handleAddTask}){
    return (
        <form onSubmit={handleAddTask} className="input-form">
            <input 
            type="text"
            placeholder='Add a new task......'
            value={taskInput}
            onChange={(e)=>setTaskInput(e.target.value)}/>
            <button type="submit">Add</button>

        </form>
    )
}
export default TaskForm