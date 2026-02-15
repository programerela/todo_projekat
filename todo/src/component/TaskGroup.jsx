import TaskItem from "./TaskItem";
import "../styles/task-group.css";

export default function TaskGroup({ isToday }) {
    return (
        <div className={isToday ? "task-group today" : "task-group"}>
            <div className="task-group-header">
                <h2>{isToday ? "Today" : "Monday"}</h2>
                <span>17 Feb 2026</span>
                <span className="task-count">0 of 5</span>
            </div>

            <div className="task-group-content">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        </div>
    );
}