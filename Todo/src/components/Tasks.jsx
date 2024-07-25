import React, { useState } from "react";
import { Button, TextField, Checkbox, Radio, RadioGroup, FormControlLabel } from "@mui/material";

function Tasks() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false); 

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
    setShowInput(false);
  }

  function editTask(index) {
    setInput(tasks[index].text);
    setIsEditing(true);
    setCurrentIndex(index);
    setShowInput(true);
  }

  function updateTask() {
    if (input.trim() === "") return;
    const updatedTasks = tasks.map((task, index) =>
      index === currentIndex ? { ...task, text: input } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentIndex(null);
    setInput("");
  }

  function cancelEdit() {
    setInput("");
    setIsEditing(false);
    setCurrentIndex(null);
    setShowInput(false);
  }

  function deleteTask(index) {
    const del = tasks.filter((_, i) => i !== index);
    setTasks(del);
  }

  function completeTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <Button onClick={() => setShowInput(true)} variant="outlined">
          Add Task
        </Button>

        <RadioGroup
          row
          value={showCompleted ? "completed" : "all"}
          onChange={(e) => setShowCompleted(e.target.value === "completed")}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="completed" control={<Radio />} label="Completed" />
        </RadioGroup>

        <TextField
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-5"
          id="search-basic"
          label="Search Tasks"
          variant="outlined"
        />
      </div>

      {showInput && (
        <div className="d-flex gap-3 mt-3">
          <TextField
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-100"
            id="standard-basic"
            label="Things to Do"
            variant="standard"
          />
          <Button
            onClick={isEditing ? updateTask : addTask}
            color="success"
            variant="contained"
            className="mt-2"
          >
            {isEditing ? "Update" : "Add"}
          </Button>
          {isEditing && (
            <Button
              onClick={cancelEdit}
              variant="contained"
              color="error"
              className="mt-2 mx-1"
            >
              Cancel
            </Button>
          )}
        </div>
      )}

      <div
        className={`mt-3 test ${
          tasks.length > 0 ? "task-list-background" : ""
        }`}
      >
        <ul>
          {(showCompleted ? completedTasks : filteredTasks).map(
            (task, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center mt-3"
              >
                <Checkbox
                  checked={task.completed}
                  onClick={() => completeTask(index)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <div>
                  <button
                    onClick={() => editTask(index)}
                    className="btn btn-secondary mx-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
