import React from 'react'

const Task = ({title,description,deletetask,index}) => {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={()=>{
            deletetask(index)
        }}>-</button>
    </div>
  )
}

export default Task

//* Task Component Explanation:
//*This functional component (Task) receives props (title, description, deletetask, index) from its parent (Home).
//*It displays a task's title and description.
//*Provides a delete button (-) that calls deletetask function with the task's index when clicked.