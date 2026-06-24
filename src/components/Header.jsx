import React from "react";

function Header({activeCount,isDarkMode,setIsDarkMode,completionPercentage}){
    return (
        <header className="header">
            <div>
                <h1>Task Manager</h1>
                <p className="task-count">
                    {activeCount}{activeCount===1 ? 'task ':'tasks '} remaining
                </p>
                <div className="progress-container">
                    <div className="progress-bar"
                    style={{ width: `${completionPercentage}%` }}>
                    </div>

                </div>
            </div>
            <button className="theme-toggle"
            onClick={()=>setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </header>
    )
}
export default Header