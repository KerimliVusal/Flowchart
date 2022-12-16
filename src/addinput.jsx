import React from "react";
import { useForm } from "react-hook-form";
function Addinput({setInputs, Inputs}){
const { register,handleSubmit,reset} = useForm();
const onSubmit=(data)=>{
    setInputs([...Inputs,data]);
    console.log(Inputs);  
    reset();
}


return(
   <div className="form?">
     <form   onSubmit={handleSubmit(onSubmit)} className="form1?">
      <div >
        <label className="labal1">
      <input {...register("name",{required:true})} />
      </label>
      <input className="sub?" type="submit" value="Submit"  />
      </div>
    </form>
    </div>
)
}
export default Addinput