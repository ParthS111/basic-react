import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

function Home() {
  const [parentID,setParentId]=useState('')
  let navigate=useNavigate()

  const submit =()=>{
    console.log("jkjkjkjkj")
    navigate(`/home/${parentID}`)
  }
  return (
    <div style={{justifyContent:'center'}}>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>

     
      </nav>

      <input type={"text"} onChange={(e)=>setParentId(e.target.value)}/>
      <button type="button" className="btn btn-primary" onClick={submit}>Primary</button>


    </div>
  );
}
export default Home