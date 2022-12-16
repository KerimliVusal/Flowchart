import React, { useEffect } from "react";
import Form from './Form';
import Createform from './Createform';
import { useState } from "react";
import Addinput from "./addinput";
import Show from "./showinput";
import Child from "./child";
import {MdDoneOutline} from 'react-icons/md';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {TiDelete} from 'react-icons/ti';
import './node.css';


 function App() {
  
  const[Inputs,setInputs]=useState([]);
  const[child,setChild]=useState(false)
  const[child1,setChild1]=useState(false)
  const[child2,setChild2]=useState(false)
  const[childs,setChilds]=useState(false)
  const[child11,setChild11]=useState(false)
  const[child21,setChild21]=useState(false)
  const[child111,setChild211]=useState(false)
  const[chil,setChil]=useState(false)
  const[chil1,setChil1]=useState(false)
  
  const[chi,setChi]=useState(false)
  const[chi1,setChi1]=useState(false)
  const[chi2,setChi2]=useState(false)
  const[chis,setChis]=useState(false)
  const[chi11,setChi11]=useState(false)
  const[chi21,setChi21]=useState(false)
  const[chi111,setChi211]=useState(false)
  const[ch,setCh]=useState(false)
  const[ch1,setCh1]=useState(false)

  const[child3,setChild3]=useState(false)
  const[child13,setChild13]=useState(false)
  const[child23,setChild23]=useState(false)
  const[childs3,setChilds3]=useState(false)
  const[child113,setChild113]=useState(false)
  const[child213,setChild213]=useState(false)
  const[child1113,setChild2113]=useState(false)
  const[chil3,setChil3]=useState(false)
  const[chil13,setChil13]=useState(false)

  const[node1,setNode1]=useState(false)
  const[node2,setNode2]=useState(false)
  const[node3,setNode3]=useState(false)
  const[value,setValue]=useState('')
  const[mydiv,setMydiv]=useState(false)
  

const Nodes=()=>{
  if(node1==true&node3==false){
    setNode2(true)
  }
   if(node1==true&node2==true){
    setNode3(true)
  }
  setNode1(true)
  
}
const Removenodes=()=>{
  setNode1(false)
  setNode2(false)
  setNode3(false)
  remove();
  removes();
  remove1();
  removes1();
  remove3()
  removes3()
  setChil(false)
  setChil1(false)
  setCh1(false)
  setCh(false)
  setChil3(false)
  setChil13(false)
  
 

}
const remove=()=>{
  setChild(()=>false)
  setChild1(()=>false)
  setChild11(false)

}
const removes=()=>{
  setChilds(()=>false)
  setChild2(()=>false)
  setChild21(false)
}
const Chil=()=>{
  if(chil==true){
    setChil1(true)
  }
  setChil(true)
}
const remove1=()=>{
  setChi(()=>false)
  setChi1(()=>false)
  setChi11(false)

}
const removes1=()=>{
  setChis(()=>false)
  setChi2(()=>false)
  setChi21(false)
}
const Ch=()=>{
  if(ch==true){
    setCh1(true)
  }
  setCh(true)
}

const remove3=()=>{
  setChild3(()=>false)
  setChild13(()=>false)
  setChild113(false)

}
const removes3=()=>{
  setChilds3(()=>false)
  setChild23(()=>false)
  setChild213(false)
}
const Chil3=()=>{
  if(chil3==true){
    setChil13(true)
  }
  setChil3(true)
}



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    
  }
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
   
  }
  
}
// useEffect(()=>{
//   const dragelmt=document.getElementById('mydiv');
//   dragElement(dragelmt);
  
// },[mydiv])
const myDrag=(e)=>{
  if(mydiv==true){
   return dragElement(document.getElementById('mydiv'));
  }
   
  
}  
useEffect(()=>{
  myDrag();
  setTimeout(()=>{
  setMydiv(true)
  },30000)
},[mydiv])



var zoomIndex=3;
function zooming () {
  const mydiv=document.getElementById('mydiv')
  // zoomingTarget.style.zoom = "calc(100% + " + zoomIndex*10 + "%)";
  mydiv.style.zoom="calc(100% + " + zoomIndex*2 + "%)";
  zoomIndex++;
}
function zoomingout () {
  const mydiv=document.getElementById('mydiv')
  // zoomingTarget.style.zoom = "calc(100% + " + zoomIndex*10 + "%)";
  mydiv.style.zoom="calc(100% + " + zoomIndex*2 + "%)";
  zoomIndex--;
}
function zoomingselect () {
  const mydiv=document.getElementById('mydiv')
  // zoomingTarget.style.zoom = "calc(100% + " + zoomIndex*10 + "%)";
  mydiv.style.zoom="calc(100% + " + value + "%)";
 
  
}

useEffect(()=>{
  zoomingselect();
},[value])
   
  return (<div><div className='zoom'><button onClick={()=>zooming()}>+</button>
  <select value={value} onChange={(e)=>{setValue(e.target.value);}}>
  <option value={60}>60</option>
  <option value={70}>70</option>
  <option value={80}>80</option>
  <option value={90}>90</option>
    <option value={100}>100</option>
  </select>
  <button onClick={()=>zoomingout()}>-</button></div>
 

  
    <div id='mydiv' className="zooming-target">
       <div id="mydivheader" className='contaner'>
      <ul className={node1&node3?'main':''} id={node1&node2?'main':''}><li className={node1?"mainli":''} ><input type='text' placeholder="categories" className="main1"   /><button onClick={()=>{Nodes();}}><AiOutlinePlusCircle size={19} ></AiOutlinePlusCircle></button><button onClick={()=>Removenodes()}><TiDelete size={22} ></TiDelete></button>
     <ul className="li">
      {node1?
          <li id={chil?'ulli1':''} className={node1?'nodebefore':''}><input type='text' placeholder="category name" className={chil?'childcolor':''} /><button onClick={()=>{Chil();}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{remove();removes();setChil(false);setChil1(false)}}><TiDelete className={chil?'buton1':'buton2'}></TiDelete></button>
        <ul className="ul11" id={chil1?'uli':''}>
          {chil?<li className="li11" id={child11?'ulli11':''}><input type='text' placeholder="category name" className={child11?'childcolor1':''} />
        <button onClick={()=>setChild11(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setChil(false);remove()}}><TiDelete className={child11?'buton1':'buton2'}></TiDelete></button>
        <ul>{child11?<li id={child?'ulli12':''}><input type='text' placeholder="category name" className={child?'childcolor2':''}  /><button onClick={()=>{setChild(true);}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>remove()}><TiDelete className={child?'buton1':'buton2'}></TiDelete></button>
        <ul>{child?<li id={child1?'ulli13':''}><input type='text' placeholder="category name" className={child1?'childcolor3':''}  /><button onClick={()=>setChild1(()=>true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>{setChild(()=>false);setChild1(false)}}><TiDelete className={child1?'buton1':'buton2'}></TiDelete></button></li>:''}
        {child1&&child?
        <li className="lastnode" id={child1?'ulli14':''}><input type='text' placeholder="category name" className={child1?'childcolor4':''} /><button onClick={()=>setChild1(()=>false)}><TiDelete className={chil?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}
        {chil1?
        <li id={child21?'ulli21':''}><input type='text' placeholder="category name" className={child21?'childcolor1':''} />
        <button onClick={()=>setChild21(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setChil1(false);removes()}}><TiDelete className={child21?'buton1':'buton2'}></TiDelete></button>
        <ul>{child21?<li id={childs?'ulli22':''}><input type='text' placeholder="category name" className={childs?'childcolor2':''} /><button onClick={()=>setChilds(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>removes()}><TiDelete className={childs?'buton1':'buton2'}></TiDelete></button>
        <ul >{childs?<li id={child2?'ulli23':''}><input type='text' placeholder="category name" className={child2?'childcolor3':''}  /><button onClick={()=>setChild2(()=>true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>{setChilds(()=>false);setChild2(false)}}><TiDelete className={child2?'buton1':'buton2'}></TiDelete></button></li>:''}
        {child2&&childs?
        <li className="lastnode" id={child2?'ulli24':''}><input type='text' placeholder="category name" className={child2?'childcolor4':''}  /><button onClick={()=>setChild2(()=>false)}><TiDelete className={chil?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}

        </ul>
        </li>:''}
        {node2?
        <li id={ch?'ulli31':''}><input type='text' placeholder="category name" className={ch?'childcolor':''} /><button onClick={()=>{Ch();}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button><TiDelete className={ch?'buton1':'buton2'}></TiDelete></button>
          <ul ul className="ul11" id={ch1?'uli':''}>
        {ch?<li id={chi11?'ulli32':''}><input type='text' placeholder="category name" className={chi11?'childcolor1':''} />
        <button onClick={()=>setChi11(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setCh(false);remove1()}}><TiDelete className={chi11?'buton1':'buton2'}></TiDelete></button>
        <ul>{chi11?<li id={chi?'ulli33':''}><input type='text' placeholder="category name" className={chi?'childcolor2':''} /><button onClick={()=>{setChi(true);}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>remove1()}><TiDelete className={chi?'buton1':'buton2'}></TiDelete></button>
        <ul>{chi?<li id={chi1?'ulli34':''}><input type='text' placeholder="category name" className={chi1?'childcolor3':''}  /><button onClick={()=>setChi1(()=>true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button  className='lastul' onClick={()=>{setChi(()=>false);setChi1(false)}}><TiDelete className={chi1?'buton1':'buton2'}></TiDelete></button></li>:''}
        {chi1&&chi?
        <li className="lastnode" id={chi1?'ulli35':''}><input type='text' placeholder="category name" className={chi1?'childcolor4':''}  /><button onClick={()=>setChi1(()=>false)}><TiDelete className={chi1?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}
        {ch1?
        <li id={chi21?'ulli41':''}><input type='text' placeholder="category name" className={chi21?'childcolor1':''}  />
        <button onClick={()=>setChi21(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setCh1(false);removes1()}}><TiDelete className={chi21?'buton1':'buton2'}></TiDelete></button>
        <ul>{chi21?<li id={chis?'ulli42':''}><input type='text' placeholder="category name" className={chis?'childcolor2':''} /><button onClick={()=>setChis(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>removes1()}><TiDelete className={chis?'buton1':'buton2'}></TiDelete></button>
        <ul>{chis?<li id={chi2?'ulli43':''}><input type='text' placeholder="category name" className={chi2?'childcolor3':''}  /><button onClick={()=>setChi2(()=>true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>{setChis(()=>false);setChi2(false)}}><TiDelete className={chi2?'buton1':'buton2'}></TiDelete></button></li>:''}
        {chi2&&chis?
        <li className="lastnode" id={chi2?'ulli44':''}><input type='text' placeholder="category name" className={chi2?'childcolor4':''}  /><button onClick={()=>setChi2(()=>false)}><TiDelete className={chi2?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}
        </ul>
      </li>:''}

{/* 333333333333333 */}
   {node3?
    <li id={chil3?'ulli51':''}>
    <input type='text' placeholder="category name" className={chil3?'childcolor':''} /><button onClick={()=>{Chil3();}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button><TiDelete className={chil3?'buton1':'buton2'}></TiDelete></button>
    <ul className="ul11" id={chil13?'uli':''}>
          {chil3?<li id={child113?'ulli52':''}><input type='text' placeholder="category name" className={child113?'childcolor1':''} />
        <button onClick={()=>setChild113(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setChil3(false);remove3()}}><TiDelete className={child113?'buton1':'buton2'}></TiDelete></button>
        <ul>{child113?<li id={child3?'ulli53':''}><input type='text' placeholder="category name" className={child3?'childcolor2':''} /><button onClick={()=>{setChild3(true);}}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>remove3()}><TiDelete className={child3?'buton1':'buton2'}></TiDelete></button>
        <ul>{child3?<li id={child13?'ulli54':''}><input type='text' placeholder="category name" className={child13?'childcolor3':''}  /><button onClick={()=>setChild13(()=>true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>{setChild3(()=>false);setChild13(false)}}><TiDelete className={child13?'buton1':'buton2'}></TiDelete></button></li>:''}
        {child13&&child3?
        <li className="lastnode" id={child13?'ulli55':''}><input type='text' placeholder="category name" className={child13?'childcolor4':''} /><button onClick={()=>setChild13(()=>false)}><TiDelete className={child13?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}
        {chil13?
        <li id={child213?'ulli61':''}><input type='text' placeholder="category name" className={child213?'childcolor1':''} />
        <button onClick={()=>setChild213(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button><button onClick={()=>{setChil13(false);removes3()}}><TiDelete className={child213?'buton1':'buton2'}></TiDelete></button>
        <ul>{child213?<li id={childs3?'ulli62':''}><input type='text' placeholder="category name" className={childs3?'childcolor2':''} /><button onClick={()=>setChilds3(true)}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button onClick={()=>removes3()}><TiDelete className={childs3?'buton1':'buton2'}></TiDelete></button>
        <ul>{childs3?<li id={child23?'ulli63':''}><input type='text' placeholder="category name" className={child23?'childcolor3':''}  /><button onClick={()=>setChild23(()=>true)} id={child23?'btn64':''}><AiOutlinePlusCircle></AiOutlinePlusCircle></button>
        <button   onClick={()=>{setChilds3(()=>false);setChild23(false)}} id={child23?'btn64':''}><TiDelete className={child23?'buton1':'buton2'}></TiDelete></button></li>:''}
        {child23&&childs3?
        <li className="lastnode" id={child23?'ulli64':''}><input type='text' placeholder="category name" className={child23?'childcolor4':''}  /><button onClick={()=>setChild23(()=>false)}><TiDelete className={child23?'buton1':'buton2'}></TiDelete></button></li>:''}
        </ul></li>:''}</ul></li>:''}
        </ul>     
    </li>:''}

     </ul>
     </li></ul>
     </div>
     </div>
     </div>
  );
}
export default App
