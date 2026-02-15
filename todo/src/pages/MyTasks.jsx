import "../styles/my-tasks.css";
import TaskDayGroup from "../component/TaskGroup";

function MyTasks() {
  return (
    <main className="mytasks">
      <div className="tasks-header">
        <h1>My Tasks</h1>
        <p>Focus on today. Scroll for previous days.</p>
      </div>

      <div className="task-input-section">
        <input
          type="text"
          placeholder="Add a task for today..."
          className="task-input"
        />
        <button className="add-task-btn">Add</button>
      </div>

      <div className="task-days-container">
        <TaskDayGroup isToday={true} />
        <TaskDayGroup />
        <TaskDayGroup />
      </div>
    </main>
  );
}

export default MyTasks;
