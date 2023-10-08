"use client";
// import Create from '@/components/Create';
// import Show from '@/components/Show';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'



function page() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("Due");
  const [task, settask] = useState([]);
  const [activetask, setactivetask] = useState(null);

  return (
    <div className='container'>
      <Navbar/>
      {/* <Create 
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
      /> */}

      {/* <center><h2 className='bg-info-subtle col-3 rounded'>Your Tasks</h2></center>
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
      /> */}
    </div>
  )
}

export default page




// real dom
// virtual dom
// reconsiation
// 1 updating
// 2 rendering


// default export => export default name,    import anyname from "path";
// const export  => export const user ,  import {user } from "path";
// combine export => export { user , admin } from  "path";


// usestate use for make variables of react 
// two way binding
// toastify for attractive alerts
// JSON.stringfy = for convert  data 
