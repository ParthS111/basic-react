import React, { useState } from 'react'
import { Link, useLocation, useNavigate ,  } from 'react-router-dom'
function About() {
  const [parentID,setParentId]=useState('')
  let navigate=useNavigate()
console.log(navigate,'navigate')
  const submit =()=>{
    navigate(1)
  }
  return (
    <div style={{justifyContent:'center'}}>
      <h1>About</h1>
    
      <button type="button" className="btn btn-primary" onClick={submit}>Primary</button>


    </div>
  );
}

export default About