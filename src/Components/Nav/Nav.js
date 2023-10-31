import React from 'react';
import './Nav.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { useState , useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changeCategory } from '../../Redux/categorySlice';

function Nav() {
  const dispatch = useDispatch();
  const[temp,setTemp] = useState('')
  const [type,setType] = useState('');
  let categories = [{id:'Entertainment'},{id:'Sports'},{id:'Global'},{id:'Technology'},{id:'Health'},{id:'India'},{id:'Business'},{id:'Local'},{id:'Games'},{id:'Science'}] 
 
  const handleChange=()=>{
    setType(temp);

  }
 
  useEffect(()=>{
    dispatch(changeCategory(type))
    
  },[type])
  
  return (
    <div className="Nav-main">
        <div className="upper">
        <div className="logo" onClick={()=> setType('')}>
         NEWS <span>NEST</span>
        </div>
        <div className="search-box">
            <div className="search-icon" onClick={handleChange}>
               <AiOutlineSearch />
            </div>
            <input type="text" placeholder='Search for topics,locations & sources' onChange={(event)=>{setTemp(event.target.value)}} onKeyPress={handleChange}/>
        </div>
        </div>
        <div className="lower">
         <ul>
          {
            categories.map((item) =>  (
            <li onClick={(event)=>{setType(event.target.innerText.toUpperCase())}} >{item.id}</li>
            ))
          }
         </ul>
        </div>
    </div>
  )
}

export default Nav;