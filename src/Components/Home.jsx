import React, { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
//* usestate is basically used to rerender the webpage whenever the value changes
//* it is one of react hook that we can use

function Home() {
  const initialarray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(initialarray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Submithandler = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const deletetask = (index) => {
    const filteredarray = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filteredarray);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={Submithandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deletetask={deletetask}
          index={index}
        />
      ))}
    </div>
    //*map function creates a new array from a calling function
  );
}

export default Home;

//!  code explanantion below---------------------------------------------->

//todo task, title, and description are managed using the useState hook.
//todo task: Stores an array of tasks retrieved from localStorage or initialized as an empty //todo array.
//todo title and description: Store the values entered by the user in the form fields.
//todo Form Submission (Submithandler):

//todo Submithandler function is triggered when the form is submitted (onSubmit).
//todo It prevents the default form submission behavior (e.preventDefault()).
//todo Constructs a new task object using current title and description, then adds it to the //todo task state array.
//todo Resets title and description to empty strings after adding the task.
//todo Deleting a Task (deletetask):

//tododeletetask function removes a task from the task state array based on the index passed as an argument.
//todo Uses filter method to create a new array excluding the task at the specified index.
//todo Updates the task state with the filtered array using setTask.
//todo Effect with useEffect:

//todo useEffect hook is used to store the task state in localStorage whenever task changes //todo ([task] as dependency).
//todo Ensures tasks persist across page reloads or component re-renders.
//todo Rendering Tasks:

//todo Uses map method to render each task stored in the task state.
//todo Passes task data (title, description, deletetask, index) to the Task component using //todo props.
//todo Each task component (Task) includes a delete button (-) which triggers the deletetask //todo function.//todo
