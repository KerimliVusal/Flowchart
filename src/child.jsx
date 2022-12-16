import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
function Child({child}){
    const { register,handleSubmit,reset} = useForm();
  const onsubmit=()=>{
    console.log('he')
  }
return(
    <div  >
        <form className="show1" onSubmit={handleSubmit(onsubmit)}  >
            { 
            child.map((Inpu,index)=>(
                <div >
                <ul >
                <li key={index} >
                    <input type={`${Inpu.type}`} value={Inpu.value} placeholder={`${Inpu.name}`}/>
                    <input type="submit" value="submit" className="btn"/>

                </li>
                </ul>
                </div>
            ))
            }
        </form> 
        
    </div>
)

};
export default Child