"use client"
import React from 'react'
import { toast } from 'react-toastify';


const Show= (props) => {
 const{ setactivetask,settitle,setdescription,setstatus,task,settask}=props

  const updateHandler = (index) => {
    const { title, description, status } = task[index];
    settitle(title);
    setdescription(description);
    setstatus(status);
    setactivetask(index);
  }
  const deleteHandler = (index) => {
    //  const copytask = [...task];
    //  copytask.splice(index,1);
    //  settask(copytask);
    console.log(index);

    settask(task.filter((t, i) => i !== index));
    toast.warning("your task is deleted..")
  }

  let tasklist = <h3 className='mt-5 text-center w-100 text fw-semibold'>there is no pending task please create task first..</h3>
  if (task.length > 0) {
    tasklist = task.map((task, index) => {
      return (
        <div key={index} className="card ms-3" style={{ width: "18vw" }}>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className='card-title'>{task.date}</p>
            <p className='card-title'>{task.time}</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">{task.status}</h6>
            <p className="card-text">{task.description}</p>
            <div className='d-flex' style={{ gap: "10px" }}>
              <button onClick={() => updateHandler(index)} className='btn btn-primary'>Update</button>
              <button className='btn btn-secondary placeholder-glow' onClick={() => deleteHandler(index)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })
  }
  
 

  return (
    <div>
      <div className='d-flex flex-wrap'>
        {tasklist}
      </div>
    </div>
  )
}

export default Show;
