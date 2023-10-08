"use client"
import css from '../components/Nav.module.css';
import React from 'react'
import Link from 'next/link'
import { ArrowRightCircleIcon } from '@remixicons/react/fill';

const Navbar = () => {

  return (
  <div className={`main w-100 position-relative ${css.main}`}>
    <img className={`effect ${css.effect}`} src="/images/vilot-effect.jpg"/>
    <div className='w-100 d-flex align-items-center justify-content-between p-3 position-relative'>
       <img src="/images/logo.gif" height="60vw" width="80vw"  alt="" />
       <div className='d-flex '>
          <Link className='me-5 text-decoration-none text-black fw-semibold' href="/create">My Task</Link>
          <Link className='me-3 text-decoration-none text-black fw-semibold'href="/create">Create Task</Link>
       </div>
    </div>
    <img className={`effect ${css.effect}`} src="/images/red-effect.jpg"/>
   <center className='mt-5' >
    <div className='w-50'>
    <h1 className='mt-5 fw-semibold'>Lets Start With Create Task For You.</h1>
     <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi quos voluptate voluptatem officiis eius vitae ducimus voluptates? Harum similique iure inventore consequuntur nisi veniam.</p>
     <Link className='mt-3 btn btn-primary' href={"/create"}>Start <ArrowRightCircleIcon className='ms-2' height={"2vw"} width={"2vw"}/></Link>
    <img className={`effect ${css.effect}`}src="/images/yellow-effect.jpg"/>
     
    </div>
  </center>
   
    <img className={`effect ${css.effect}`} src="/images/blue-effect.jpg"/>
     
  </div>

  )
}

export default Navbar
