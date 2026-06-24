import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const activeCount = tasks.filter(
    (task) => !task.completed
  ).length;
  /* task bar*/
  const totalTasks=tasks.length;
  const completionPercentage = totalTasks > 0
  ? Math.round(((totalTasks - activeCount) / totalTasks) * 180) / 1.8:0;
/*clear all*/
  const handleClearAll = () => {
  if (window.confirm("Are you sure you want to delete all tasks?")) {
    setTasks([]);
  }
};

const handleClearCompleted = () => {
  setTasks(tasks.filter(task => !task.completed));
};

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="manager-card">

        <Header
          activeCount={activeCount}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          completionPercentage={completionPercentage}
        />

        <TaskForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleAddTask={handleAddTask}
        />

        <FilterTabs
          filter={filter}
          setFilter={setFilter}
          onClearAll={handleClearAll}
          onClearCompleted={handleClearCompleted}
        />

        <TaskList
          filteredTasks={filteredTasks}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTask={handleDeleteTask}
        />

      </div>
    </div>
  );
}

export default App;