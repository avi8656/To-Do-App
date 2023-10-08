"use client"
import css from '../create/style.css';
import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import Show from '@/components/Show';

const Create = (props) => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("Due");
    const [task, settask] = useState([]);
    const [activetask, setactivetask] = useState(null);

    //   const { setactivetask,title,description,status,settitle,setdescription,setstatus,activetask,task,settask} = props;
    const submitHandler = (e) => {
        e.preventDefault();
        if (title.length < 4 || description.length < 15) {
            toast.warning("Title and description must be 4 and 15 character respectively .... !");
            return;
        }

        const obj = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            title,
            description,
            status
        }
        settask([...task, obj]);
        settitle("");
        setdescription("");
        setstatus("due");
        toast.success("Task added success...")
        console.log(obj);
    }
    const updatetask = (e) => {
        e.preventDefault();
        const copytask = [...task];
        copytask[activetask] = { ...copytask[activetask], title, description, status }
        settask(copytask);
        settitle("");
        setstatus("Due");
        setdescription("");
        setactivetask(null);
        toast.success("task update successful...")
    }
    return (
        <div className='container mt-5'>
            
            <h3 className='fw-semibold mt-3'>Create a task.</h3>
            <form className={`ms-3 p-3 mt-3 w-50 ${css.bgcolor} `}>
                <input type="text" placeholder='Title' name='title' value={title} onChange={(e) => settitle(e.target.value)} className='form-control mt-3' />
                <textarea placeholder='description here ..' value={description} onChange={(e) => setdescription(e.target.value)} className='form-control mt-3'></textarea>
                <select onChange={(e) => setstatus(e.target.value)} Value={status} className='form-control mt-3'>
                    <option value="Due">Due</option>
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                </select>
                {activetask === null ?
                  <center><button onClick={submitHandler} className='btn btn-primary mt-5'>Create Task</button></center>
                    :
                   <center><button onClick={updatetask} className='btn btn-primary mt-5'>Update Task</button></center>
                }
            </form>

         

            <Show
                title={title}
                settitle={settitle}
                description={description}
                setdescription={setdescription}
                status={status}
                setstatus={setstatus}
                activetask={activetask}
                setactivetask={setactivetask}
                task={task}
                settask={settask}
            />
        </div>


    )
}

export default Create;
