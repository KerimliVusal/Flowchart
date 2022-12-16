import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
function Form({setInputs,Inputs}){
    const { register,handleSubmit,reset} = useForm();
const onSubmit=(data)=>{
    console.log(data);
    axios.post("https://jsonplaceholder.typicode.com/posts",data).then(res=>res.data)
    .then(data=>console.log(data))
} 
const Remove=()=>{
    setInputs(Inputs.filter((item,index)=>index!==(Inputs.length-1)))
}


return(
    <div className="menice">
        <h1>Input Fileds</h1>
        <form className="form2" onSubmit={handleSubmit(onSubmit)}  >
            { 
            Inputs.map((Input,index)=>(
                <label key={index}>
                    {Input.name}
                    <input type={`${Input.type}`}  {...register(`${Input.name}`,{ required:true})} placeholder={`${Input.placeholder}`} />
                </label>
            ))
            }
             <input className="sub" type="submit" value="Submit"/>
             <button className="subm" onClick={()=>Remove()}>Remove last</button>

        </form> 
        
    </div>
)

}
export default Form