import React from 'react'
import {useState, useEffect} from 'react';
import './QueSolution.css';
function Solution(props) {
  // console.log(props.sol);
  const [solarr, setsolarr] = useState(props.sol);
  return (
    <>
    <div className="box-2">
    <h2>Solutions</h2>
    <div className='show-score'>
      <ul>
        {solarr.map((solarr,i)=>{
    return(
      <li>
      {solarr}
      </li>
    )
        })}
        </ul>
    </div> 
    <button id="next-button" onClick={props.tryAgain}>Restart</button>
    </div>
    </>
  )
}

export default Solution;