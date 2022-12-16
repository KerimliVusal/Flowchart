import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
import Child from "./child";
function Show({setInputs,Inputs,child,setChild}){
    const { register,handleSubmit,reset} = useForm();
const onSubmit=(data)=>{
    console.log(data);
    axios.post("https://jsonplaceholder.typicode.com/posts",data).then(res=>res.data)
    .then(data=>console.log(data))
} 
const Remove=()=>{
    setInputs(Inputs.filter((item,index)=>index!==(Inputs.length-1)))
}
const onSubmt=(z)=>{
    setChild([...child,z])
}

return(
    <div className="menice?" >
        <form className="show1" onSubmit={handleSubmit(onSubmt)}  >
            { 
            Inputs.map((Input,index)=>(
                <ul >
                <li key={index}>
                    <input type={`${Input.type}`} placeholder={`${Input.type}`} />
                    <input type="submit" value="submit" className="btn"/>
                    <label for="index">
                    <input type="checkbox" id='index'/>
                    </label>
                    
                </li>
                </ul>
                
            ))
            
            }
            
        </form> 
       
    </div>
)

}
export default Show