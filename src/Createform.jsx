import React from "react";
import { useForm } from "react-hook-form";
import './index.css';
function Createform({setInputs, Inputs}){
const { register,handleSubmit,reset} = useForm();
const onSubmit=(data)=>{
    setInputs([...Inputs,data]);
    console.log(Inputs);  
    reset();
}


return(
   <div className="form">
     <form   onSubmit={handleSubmit(onSubmit)} className="form1">
      <div >
        <label className="labal1">Label:
      <input {...register("name",{required:true})} />
      </label>
      <label>Placeholder:
      <input {...register("placeholder",{required:true})} />
      </label>
      <label className="type">Type:
      <select {...register("type",{required:true})} className="select">
        <option value="text">Input</option>
        <option value="date">DatePicker</option>
        <option value="email">Email</option>
      </select>
      </label>
      <input className="sub" type="submit" value="Submit"  />
      </div>
    </form>
    </div>
)
}
export default Createform